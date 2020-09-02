import mongoose from 'mongoose';
import Joi from 'joi';
Joi.objectId = require('joi-objectid')(Joi)

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    birthday: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
    active: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: String,
        default: new Date().toISOString()
    }
});

const ContactModel = mongoose.model('Contacts', ContactSchema);

export const CreateContactSchema = {
    name: Joi.string().min(3).max(50).required(),
    birthday: Joi.string().min(5).max(255).required(),
    gender: Joi.string().valid("female", "male").required(),
}

export const hasIdSchema = {
    id: Joi.objectId()
}

export default ContactModel