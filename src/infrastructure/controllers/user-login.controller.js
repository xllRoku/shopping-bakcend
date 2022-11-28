import { validateLoginBody } from "../validations/validate-login-body";
import { sign } from "jsonwebtoken";
import { signAsync } from "../services/jwt.service";

export const userLoginController = async ({ body }, res, next) => {
  try {
    const { email, password } = validateLoginBody(body);

    const id = await loginUserService(email, password);

    const signOptions = sign({ id }, process.env.JWT_SECRET_KEY, {
      algorithm: "HS512",
      expiresIn: "7d",
    });

    res.cookie("signOptions", jwt, { maxAge: 900000, httpOnly: true });

    const token = await signAsync(id, signOptions);

    res.json({ token });
  } catch (error) {
    return next(error);
  }
};
