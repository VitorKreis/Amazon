import Sequelize, { Model } from 'sequelize';

export default class Picture extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'has to be filled',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'has to be filled',
          },
        },
      },
    }, { sequelize });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Picture, { foreignKey: 'product_id' });
  }
}
