const subjectModel = require("./model");
const service = {};

service.addSubject = async (req, res) => {
  try {
    const subject = await subjectModel.create(req.body);
    return res.status(200).json({
      success: true,
      subject,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = service;