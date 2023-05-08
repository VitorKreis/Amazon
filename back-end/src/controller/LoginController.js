import User from '../models/User';

class LoginController {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) return res.status(401).json({ error: 'Please check your password and your email' });

      const user = await User.findOne({ where: { email } });

      if (!user) return res.status(400).send('Please check your e-mail');

      if (!(await user.IsValide(password))) res.status(400).json({ error: 'Please check your password ' });

      const { id } = user;

      req.session.user = {
        id,
        email,
      };
      return req.session.save(() => res.redirect(`/users/${id}`));
    } catch (e) {
      return res.status(400).json({
        error: e.message,
      });
    }
  }
}

export default new LoginController();
