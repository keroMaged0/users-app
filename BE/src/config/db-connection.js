import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sqlConfig = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

export const dbConnection = () => {
  sqlConfig
    .sync({ alter: true })
    .then(() => console.log("Database connected done"))
    .catch((err) => console.log(err));
};
