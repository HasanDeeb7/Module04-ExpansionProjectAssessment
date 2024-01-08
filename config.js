import { Sequelize } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, "", {
  host: process.env.DB_HOST,
  dialect: "mysql",
  port: process.env.DB_PORT,
});

try {
  await sequelize.authenticate(() => {
    console.log("Database Connected");
  });
} catch (error) {
  console.log(error);
}

export default sequelize
