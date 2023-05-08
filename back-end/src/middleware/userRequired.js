exports.userRequired = async (req, res, next) => {
  if (!req.session.user) {
    res.status(400).json({
      error: 'Please log in your account or create a account ',
    });
    req.session.save(() => res.redirect('/login'));
    return;
  }

  next();
};
