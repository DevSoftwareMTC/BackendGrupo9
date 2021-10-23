const Joi = require('joi');

const createSchema = Joi.object({
    dni: Joi.number().integer().required(),
    typeDni: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    tel: Joi.number().integer().required(),
    address: Joi.string().required(),
    city: Joi.string().required()
});

const updateSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    tel: Joi.number().integer().required(),
    address: Joi.string().required(),
    city: Joi.string().required()
});

module.exports = { createSchema, updateSchema };