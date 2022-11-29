import { validateLoginBody } from "../validations/validate-login-body.js";
import jsonwebtoken from "jsonwebtoken";
import { signAsync } from "../services/jwt.service.js";
import { loginUserService } from "../../application/services/login-user.sevice.js";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

export const userLoginController = async ({ body }, res, next) => {
  try {
    const { email, password } = validateLoginBody(body);

    const id = await loginUserService(email, password);

    const signOptions = {
      algorithm: "HS512",
      expiresIn: "7d",
    };

    const payload = { id: id };

    const token = await signAsync(payload, signOptions);

    res.json({ token });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};
