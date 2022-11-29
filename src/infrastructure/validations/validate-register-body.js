import { BadRequestException } from "./errors/bad-request.exception.js";
import {
  validateId,
  validateEmail,
  validateName,
  validatePassword,
} from "../../domain/validations/user-validation.js";

export const validateRegisterBody = (body, id) => {
  const { name, email, password } = body;

  if (!validateId(id))
    throw new BadRequestException("El formato del id no es correcto");

  if (!validateEmail(email))
    throw new BadRequestException("El formato del email no es correcto");

  if (!validateName(name))
    throw new BadRequestException("El formato del nombre no es correcto");

  if (!validatePassword(password))
    throw new BadRequestException("El formato de la contraseña no es correcto");

  return { id, name, email, password };
};
