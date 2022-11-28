import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_PRIVATE_KEY || "default_jwt_secret";

// TODO: Refactor to injectable service

export const signAsync = (payload, signOptions) =>
  new Promise((resolve, reject) => {
    jwt.sign(payload, jwtSecret, signOptions, (err, token) => {
      if (err) reject(err);
      else resolve(token);
    });
  });

export const verifyAsync = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, jwtSecret, (err, payload) => {
      if (err) reject(err);
      else resolve(payload);
    });
  });
