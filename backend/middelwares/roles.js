const roleCheck = (role) => (req, res, next) =>
  !role.includes(req.user.role)
    ? res.status(401).json({message: "no access"})
    : next();

module.exports = roleCheck;