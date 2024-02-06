import { DataTypes } from 'sequelize';
import sequelize from '../../config/database';
import Todo from './todoModel';

const SubTask = sequelize.define('SubTasks', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    TodoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Todo,
            key: 'Id'
        }
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    IsCompleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    timestamps: false
});

export default SubTask;
