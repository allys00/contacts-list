import Joi from 'joi';

import { BadRequestError } from '../utils/errors';

const validate = (schema = {}, field = 'body') => {
    return (req, res, next) => {
        const result = Joi.validate(req[field], schema, { abortEarly: false, presence: 'required' });
        if (result.error) {
            console.log(result.error.details[0].message);
            throw new BadRequestError('Campo(s) inválido(s)', result.error.details.map(d => d.message));
        }
        req[field] = result.value || req[field];
        next();
    };
};

export default validate;
