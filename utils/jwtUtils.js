import jwt from "jsonwebtoken";

export const generateToken = (newSkater, secretKey, expiresIn) => {
  return jwt.sign({ email: newSkater }, secretKey, { expiresIn });
};
export const verifyToken = (token, secretKey) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (error, decoded) => {
      if (error) {
        reject(error);
      } else {
        resolve(decoded);
      }
    });
  });
};
