import { RequestHandler } from "express";
import Joi from "joi";

export const joiValidator = (
  schema: Joi.ObjectSchema,
  msg: string = "something went wrong"
): RequestHandler => {
  return (req, res, next) => {
    const validation = schema.validate(req.body, {
      abortEarly: false,
    });

    console.log("this is the validation", validation.error?.details);

    if (validation?.error?.details) {
      res.status(400).json({
        msg,
        error: validation.error.details.map(d => d.message),
      });
    } else {
      next();
    }
  };
};
