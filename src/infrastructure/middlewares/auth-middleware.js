import { InfrastructureUnauthorizedException } from "../errors/unauthorized.exception";
import { verifyAsync } from "../services/jwt.service";

export const authMiddleware = async (req, res) => {
  const jwt = req.headers.authorization?.split("Bearer ")?.[1];
  if (!jwt)
    throw new InfrastructureUnauthorizedException(
      "No tienes permiso para acceder a este recurso"
    );

  try {
    const jwtPayload = await verifyAsync(jwt);

    res.userId = jwtPayload.id;
  } catch (err) {
    throw new InfrastructureUnauthorizedException(
      "No tienes permiso para acceder a este recurso"
    );
  }
};
