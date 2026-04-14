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
      pedido_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pedidos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: { 
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: { 
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface){
    await queryInterface.dropTable('avaliacoes');
  }
};