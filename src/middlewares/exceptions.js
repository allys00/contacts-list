import * as HttpStatusCodes from 'http-status-codes';

export default (debug = false) => async (err, req, res, _next) => {
    const status = err.status || HttpStatusCodes.INTERNAL_SERVER_ERROR;
    let response = {
        error: err.name,
        error_description: err.description || err.message,
    };

    if (status >= 400 || debug) {
        console.log(JSON.stringify(response, null, 2));
    }

    if (status >= 500 && !debug) {
        response = {
            error: 'InternalServerError',
            error_description: 'Erro interno no servidor',
        };
    }

    res.status(status).send(response);
};
