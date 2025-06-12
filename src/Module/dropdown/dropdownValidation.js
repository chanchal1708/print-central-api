// dropdownValidation.js
import Joi from "joi";

const addDropdownSchema = Joi.object().keys({
  name: Joi.string().max(20).required(),
  value: Joi.string().max(100).required(),
  flag: Joi.number().required(),
  sequence: Joi.number().allow(),
});

export default function validation(handler) {
  return function (req, res, next) {
    const { error } = addDropdownSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    return handler(req, res, next);
  };
}
