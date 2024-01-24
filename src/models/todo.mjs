import { STRING, INTEGER, BOOLEAN } from 'sequelize';
import sequelize from '../db.mjs';

const Todo = sequelize.define('ToDos', {
    Id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: STRING,
        allowNull: false
    },
    Description: {
        type: STRING,
        allowNull: true
    },
    Priority: {
        type: INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 3
        }
    },
    IsCompleted: {
        type: BOOLEAN,
        allowNull: false
    }
}, {
    timestamps: false
});

export default Todo;