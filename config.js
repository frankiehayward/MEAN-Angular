module.exports = {
	
	//! Process
	name: 'mean_2',
	config: '/opt/mean/config.js',
	
	//! Docker
	docker: {
		socketPath: process.platform === 'win32' ? '//./pipe/docker_engine' : '/var/run/docker.sock'
	},
	
	//! HTTP
	http: {
		hostname: '::',
		url: '127.0.0.1',
		port: {
			internal: '58000',
			external: '58000'
		}
	},
	
	//! HTTPS
	https: {
		hostname: '::',
		url: '127.0.0.1',
		port: {
			internal: '58001',
			external: '58001'
		},
		ssl: {
			key: 'https.key',
			cert: 'https.cert'
		}
	},
	
	//! Database
	database: {
		path: '/opt/mean/data',
		auth: {
			username: 'mean',
			password: 'm3an',
			database: 'mean'
		},
		ssl: {
			enabled: true,
			key: 'mongodb.key',
			cert: 'mongodb.cert',
			pem: 'mongodb.pem',
			ca: '',
			validate: false
		},
		repl: {
			enabled: false,
			name: 'rs0',
			read: 'nearest',
			key: 'repl.key',
			nodes: [{
				hostname: '192.168.0.69',
				port: 58002 
			}]
		}
	},
	
	//! Client Libraries
	libs: [],
	
	//! Typescript Types
	types: {
		server: [ 'async', 'body-parser', 'compression', 'express', 'helmet', 'moment', 'mongoose', 'morgan', 'winston' ],
		client: [ 'jquery' ]
	},
	
	//! Test Plans
	tests: {
		server: {
			v1: [ 'api/v1/**/*' ],
			users: [ 'api/v1/users/**/*' ]
		},
		client: {
			client: [ '**/*' ]
		}
	},
	
	//! Certificates
	certs: {
		path: '/opt/mean/certs',
		details: {
			hostname: '127.0.0.1',
			organisation: 'Vmlweb Ltd',
			country: 'GB',
			state: 'Kent',
			city: 'London'
		}
	},
	
	//! Logs
	logs: {
		path: '/opt/mean/logs',
		format: ':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] :referrer :user-agent'
	}
	
}