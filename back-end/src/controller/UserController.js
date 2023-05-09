import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.send(users);
    } catch (e) {
      return res.status(404).json({
        error: e.message,
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req;

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).send('User does not exist please verify');
      }

      return res.send(user);
    } catch (e) {
      return res.status(404).json({
        error: e.message,
      });
    }
  }

  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (e) {
      return res.status(404).json({
        error: e.message,
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).send('User does not exist please verify');
      }
      const updateUser = await user.update(req.body);
      return res.json(updateUser);
    } catch (e) {
      return res.status(404).json({
        error: e.message,
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req;

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).send('User does not exist please verify');
      }
      const deletedUser = await user.destroy();
      return res.json(deletedUser);
    } catch (e) {
      return res.status(404).json({
        error: e.message,
      });
    }
  }
}

export default new UserController();
