'use strict';

export default {
  async up(queryInterface, Sequelize){
    await queryInterface.createTable('avaliacoes',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nota:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      pedidoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pedidos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  async down(queryInterface){
    await queryInterface.dropTable('avaliacoes');
  }
};