exports.index = (req, res) => {
  res.render('login');
  return;
};

exports.register = function(req, res) {
  res.send('Olá');
}