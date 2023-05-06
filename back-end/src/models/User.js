import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

export default class Users extends Model {
  static init(sequelize) {
    super.init({
      email: {
        type: Sequelize.STRING,
        unique: {
            msg: "Please check your e-mail or connect in you account"
        },
        validate: {
            isEmail:{
                msg: "Wrong e-mail, please check"
            },
            notEmpty: {
                msg: "It' s necessary to put a e-mail"
            }
        },
        },
        password_hash: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.VIRTUAL,
          validator: {
            notEmpty: {
              msg: "It's necessary to put a password",
            },
            len: {
              arg: [5, 50],
              msg: 'Your password must be between 5 to 50 characters long',
            },
          },
      },
    }, { sequelize });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }

  IsValide(password){
    return bcrypt.compare(password, this.password_hash)
  }
}
