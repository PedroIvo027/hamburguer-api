import {Model, DataTypes} from 'sequelize';
import sequelize from "./Database.js";

export default class Avaliacao extends Model{
    static associate(models){
        Avaliacao.belongsTo(models.Pedido,{
            foreignKey: 'pedidoId',
            as: 'pedido'
        });
    }
}

Avaliacao.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nota: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                min: 1,
                max: 5
            }
        },
        pedidoId: {
            type: DataTypes.INTEGER,
            allowNull:false
        }
    },
    {
        sequelize,
        modelName: 'Avaliacao',
        tableName: 'avaliacoes',
        timestamps: true
    }
);