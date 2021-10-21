module.exports.validate = (req, res, next) => {
  if (!body.name) {
    errors.name = "Missing field name";
  }

  if (!body.email) {
    errors.email = "Missing field email";
  }

  if (Object.keys(errors).length !== 0) {
    return res.status(400).send(errors);
  }

  next();
};
