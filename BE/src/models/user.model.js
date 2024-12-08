import { DataTypes } from "sequelize";
import { sqlConfig } from "../config/db-connection.js";

export const User = sqlConfig.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile_img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { timestamps: true }
);

User.sync({ force: false })
  .then(() => console.log("User model synced"))
  .catch((error) => console.error("Error syncing model:", error));
