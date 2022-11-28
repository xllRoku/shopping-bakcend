import { registerUserService } from "../../application/services/register-user.service.js";
import { validateRegisterBody } from "../validations/validate-register-body.js";

export const userRegisterController = async ({ body }, res, next) => {
  try {
    console.log(body);

    const user = validateRegisterBody(body);

    await registerUserService(user);

    return res.send("El usuario se ha registrado correctamente");
  } catch (err) {
    console.log(err);
    return next(err);
  }
};
