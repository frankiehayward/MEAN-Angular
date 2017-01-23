export class ServerError extends Error {
	constructor(public message: string) {
		super(message)
		Object.setPrototypeOf(this, ServerError.prototype)
	}
}

export class ClientError extends Error {
	constructor(public code = ErrorCode.Unknown) {
		super(ErrorCode[code])
		Object.setPrototypeOf(this, ClientError.prototype)
	}
}

export enum ErrorCode{
	
	//Core
	Unknown = 1000,
	Server = 1001,
	NotFound = 1002,
	Connection = 1003,
	
	//Users
	USR_Invalid = 2000,
	USR_NotFound = 2001,
	
	USR_InvalidUsername = 2003,
	USR_InvalidEmail = 2004,
	USR_InvalidLimit = 2005
}