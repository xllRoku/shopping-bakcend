import { UserRepository } from "../../infrastructure/respositories/user-repository";

export const loginUserService = async (email, password) => {
  const userRepository = new UserRepository();

  const existingUserByEmail = await userRepository.findByEmail(email);

  if (!existingUserByEmail || existingUserByEmail.password !== password)
    throw new Error("Las credenciales son incorrectas");

  return existingUserByEmail.id;
};
