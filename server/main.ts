//Modules
import * as async from 'async'

//Includes
import { log, app, http, https, connections, database } from 'app'

//Backend
require.ensure([], (require) => {
	app.use('/api', (require('api') as any).router)
})

log.info('Mounted REST API backend')

//Shutdown services
const shutdown = (done?: () => void) => {
	log.info('Graceful shutdown...')
	
	//Destroy client connection sockets
	Object.keys(connections).forEach((key) => {
		connections[key].destroy()
	})
	
	//Close web and database connections
	async.each([ http, https, database ], (server, callback) => {
		server.close(() => {
			callback()
		})
	}, () => {
		
		//Remove kill and end listeners
		process.removeListener('SIGTERM', shutdown)
		process.removeListener('SIGINT', shutdown)
		
		//Execute callback or close process
		if (done){
			done()
		}else{
			process.exit(0)
		}
	})
}

//Intercept kill and end signals
process.once('SIGTERM', shutdown)
process.once('SIGINT', shutdown)

export { shutdown }