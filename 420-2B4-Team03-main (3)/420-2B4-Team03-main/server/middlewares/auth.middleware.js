const jsonwebtoken = require("jsonwebtoken")
const secret = require("../config/jwt")
const { findUserByID } = require("../queries/users.queries.js")

exports.auth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).redirect("/auth/signin");
  }
}

exports.fetchUserFromToken = async (req, res, next) => {
  try{
    const auth = req.headers.authorization;
    if(auth) {
      const token = auth.split(" ")[1];
      const decoded = jsonwebtoken.verify(token, secret);
      console.log(decoded)
      req.user  = await findUserByID(decoded.sub).exec()
      next();
    }
  } catch (e) {
    next(e);
  }
}