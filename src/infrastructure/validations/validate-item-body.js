import { BadRequestException } from "./errors/bad-request.exception.js";

export const validateItemBody = (body, id) => {
  const { name, note, image, category } = body;

  if (!validateId(id))
    throw new BadRequestException("El formato del id no es correcto");

  if (!validateName(name))
    throw new BadRequestException("El formato del nombre no es correcto");

  if (!validateName(category))
    throw new BadRequestException("El formato del nombre no es correcto");

  return { name, note, image, category };
};
