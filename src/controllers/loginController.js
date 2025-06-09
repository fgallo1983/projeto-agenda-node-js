const Login = require('../models/LoginModel')

exports.index = (req, res) => {
  res.render('login');
  return;
};

exports.register = function(req, res) {
  const login = new Login(req.body);
  res.send(req.body);
}