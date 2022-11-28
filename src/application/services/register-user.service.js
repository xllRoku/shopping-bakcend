import { UserRepository } from "../../infrastructure/respositories/user-repository.js";
import { ConflictException } from "../errors/conflict.exception.js";

export const registerUserService = async (user) => {
  const userRepository = new UserRepository();

  const existingUserById = await userRepository.findByid(user.id);
  if (existingUserById) throw new ConflictException("Identificador duplicado");

  const existingUserByEmail = await userRepository.findByEmail(user.email);
  if (existingUserByEmail)
    throw new ConflictException("El email ya está en uso");

  await userRepository.create(user);
};
