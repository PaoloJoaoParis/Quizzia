import Joi from "joi";

const playerSchema = Joi.object({
  pseudo: Joi.string()
    .max(50)
    .min(3)
    .required(),

  age: Joi.number()
    .integer()
    .required(),
});

export default playerSchema;