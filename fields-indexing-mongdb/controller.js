const User = require("./model");

module.exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
