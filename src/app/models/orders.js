import Sequelize, { Model } from 'sequelize';

class Orders extends Model {
  static init(sequelize) {
    super.init(
      {
        recipient_id: Sequelize.INTEGER,
        deliveryman_id: Sequelize.INTEGER,
        signature_id: Sequelize.INTEGER,
        product: Sequelize.STRING,
        canceled_at: Sequelize.DATE,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
      },
      {
        sequelize,
      }
    )

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Deliveryman, { foreignKey: 'deliveryman_id', as: 'deliveryman' });
    this.belongsTo(models.Recipients, { foreignKey: 'recipient_id', as: 'recipient' });
    this.belongsTo(models.filesOrders, { foreignKey: 'signature_id', as: 'filesOrders' });
  }
}

export default Orders;