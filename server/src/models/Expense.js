import sequelize from "../db/dbConfig.js";
import { DataTypes } from "sequelize";
import { User } from "./User.js";

export const Expense = sequelize.define('Expense', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  local: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

User.hasMany(Expense,{foreignKey: 'UserId'});
Expense.belongsTo(User,{foreignKey: 'UserId'});