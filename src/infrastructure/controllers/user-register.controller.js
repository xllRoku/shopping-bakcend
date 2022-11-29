import { registerUserService } from "../../application/services/register-user.service.js";
import { validateRegisterBody } from "../validations/validate-register-body.js";
import uuid from "uuid-random";

export const userRegisterController = async ({ body }, res, next) => {
  try {
    const id = uuid();

    const user = validateRegisterBody(body, id);

    await registerUserService(user);

    return res.send("El usuario se ha registrado correctamente");
  } catch (err) {
    console.log(err);
    return next(err);
  }
};
