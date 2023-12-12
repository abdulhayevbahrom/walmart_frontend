const Joi = require("joi");
const productValidation = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required().min(2),
    category: Joi.string().required().min(3),
    quantity: Joi.number().required().min(3),
    brend: Joi.string().required().min(8),
    price: Joi.number().required(),
    image: Joi.string().required(),
    description: Joi.string().required(),
  });

  let { error } = schema.validate(req.body);
  if (error) return res.send(error.details[0].message);
  next();
};

module.exports = { productValidation };
