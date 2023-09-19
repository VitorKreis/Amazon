import Sequelize, { Model } from 'sequelize';

export default class Product extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [1, 255],
            msg: "It's necessary to put a name in you product",
          },
        },
      },
      description: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [1, 10000],
            msg: 'Its necessary to put a name in you product',
          },
        },
      },
      price: {
        type: Sequelize.FLOAT,
        validate: {
          len: {
            args: [1, 1_000_000],
            msg: 'Its necessary to put a value to your product',
          },
        },
      },
    }, { sequelize });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Picture, { foreignKey: 'product_id' });
  }
}
