import * as HttpStatusCodes from 'http-status-codes';

export class BadRequestError extends Error {
    constructor(message = 'Requisição inválida', description) {
        super(message);
        this.name = 'BadRequestError';
        this.description = description;
        this.status = HttpStatusCodes.BAD_REQUEST;
    }
}

export class NotFoundError extends Error {
    constructor(message = 'Recurso não encontrado') {
        super(message);
        this.name = 'NotFoundError';
        this.description = message;
        this.status = HttpStatusCodes.NOT_FOUND;
    }
}

export class InternalError extends Error {
    constructor(message = 'Erro interno no servidor') {
        super(message);
        this.name = 'InternalError';
        this.status = HttpStatusCodes.InternalError;
    }
}
