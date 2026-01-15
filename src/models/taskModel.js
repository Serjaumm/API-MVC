import { DataTypes } from "sequelize";
import db from "../config/database.js";
import User from "./userModel.js";

const task = db.define('Task', {
    id: {
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        references: {
            model: User,
            key: "id",

        }
    },
    title: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    }
},
{
    tableName: 'tasks',
    timestamps: true,
}
);


//relacionamentos de db
User.hasMany(task, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

task.belongsTo(User, {foreignKey: 'user_id',});

export default Task;