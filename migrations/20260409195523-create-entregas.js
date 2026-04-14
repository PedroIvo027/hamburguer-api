'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('entregas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      pedido_id :{
        type : Sequelize.INTEGER,
        allowNull : false,
        references : { model : 'pedidos', key : 'id', onDelete : 'CASCADE' , onUpdate : 'CASCADE' }
      },
      codigo_rastreio:{
        type: Sequelize.STRING,
        allowNull : false,
        unique : true
      },
      endereco :{
        type: Sequelize.STRING,
        allowNull : false
      },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
      deletedAt: { type: Sequelize.DATE }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('entregas');
  }
};
