import { UserRepository } from "../../infrastructure/respositories/user-repository.js";
import { UnauthorizedException } from "../errors/unauthorized.exception.js";

export const loginUserService = async (email, password) => {
  const userRepository = new UserRepository();

  const existingUserByEmail = await userRepository.findByEmail(email);

  if (!existingUserByEmail || existingUserByEmail.password !== password)
    throw new UnauthorizedException("Las credenciales son incorrectas");

  return existingUserByEmail.id;
};
