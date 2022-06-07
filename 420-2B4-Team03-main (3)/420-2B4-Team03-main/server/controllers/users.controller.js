const {
  createUser,
  findUserByEmail,
  updateUser,
} = require("../queries/users.queries");
const { setUserFromToken } = require("../middlewares/auth.middleware");

exports.signup = async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.getCurrentUser = async (req, res, next) => {
  try {
    res.json(req.user);
  } catch (e) {
    next(e);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await updateUser(req.body);
    res.json(user);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
