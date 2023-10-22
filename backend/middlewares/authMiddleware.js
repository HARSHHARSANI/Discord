import jwt from "jsonwebtoken";

const config = process.env;

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["authorization"];

  if (!token) {
    return res.status(400).send({
      success: false,
      message: "Token Is required for authentication",
    });
  }

  try {
    token = token.replace(/^Bearer\s+/, "");
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      message: "Invalid Token",
      error,
    });
  }
  return next();
};

export { verifyToken };
