const jsonwebtoken = require("jsonwebtoken");
const { findUserByEmail } = require("../queries/users.queries");
const secret = require("../config/jwt");

exports.sessionCreate = async (req, res, next) => {
  try {
    const user = await findUserByEmail(req.body.email);
    if (!user) throw new Error("Utilisateur non trouvé");
    const match = await user.comparePassword(req.body.password);
    if (!match) throw new Error("Mot de passe erroné");
    const token = jsonwebtoken.sign(
      {
        sub: user._id.toString(),
      },
      secret,
      { algorithm: "HS256" }
    );
    if (!token) throw Error("Incapable de créer un jeton");
    res.status(200).json({
      user,
      token,
    });
  } catch (e) {
    next(e);
  }
};

exports.sessionDelete = (req, res, next) => {
  req.logout();
  res.redirect("/");
};
