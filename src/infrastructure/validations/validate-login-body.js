import { UnauthorizedException } from "../../application/errors/unauthorized.exception.js";
import {
  validateEmail,
  validatePassword,
} from "../../domain/validations/user-validation.js";
import { BadRequestException } from "./errors/bad-request.exception.js";

export const validateLoginBody = (body) => {
  const { email, password } = body;
  if (!email || !password)
    throw new BadRequestException("Se espera un email y contraseña");

  if (!validateEmail(email) || validatePassword(password))
    throw new UnauthorizedException("Las credenciales son incorrectas");

  return { email, password };
};
