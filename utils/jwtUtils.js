import jwt from "jsonwebtoken";

export const verifyTokenMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  token = token.split(" ")[1];

  try {
    const { email } = jwt.verify(token, process.env.JWT_SECRETKEY);

    console.log(email)(next);
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Failed to authenticate token" });
  }
};
