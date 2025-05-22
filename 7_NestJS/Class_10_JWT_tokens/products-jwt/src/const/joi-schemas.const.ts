import Joi from "joi";
import { User } from "../interfaces/user.interface";
import { Product } from "../interfaces/product.interface";

export const userSchema = Joi.object<User>({
  firstName: Joi.string().min(3).max(50).required(),
  lastName: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(30).required(),
});

export const createProductSchema = Joi.object<Product>({
  title: Joi.string().min(3).max(50).required(),
  price: Joi.number().min(0).required(),
  stock: Joi.number().integer().min(0).required(),
});

export const updateProductSchema = Joi.object<Product>({
  title: Joi.string().min(3).max(50),
  price: Joi.number().min(0),
  stock: Joi.number().integer().min(0),
});
