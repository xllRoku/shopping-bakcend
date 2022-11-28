import {
  validateEmail,
  validatePassword,
} from "../../domain/validations/user-validation.js";

export const validateLoginBody = (body) => {
  const { email, password } = body;
  if (!email || !password) throw new Error("Se espera un email y contraseña");

  if (!validateEmail(email) || validatePassword(password))
    throw new Error("Las credenciales son incorrectas");

  return { email, password };
};
