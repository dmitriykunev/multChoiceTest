import { Sequelize } from "sequelize-typescript";
import { Card } from "../cards/card.entity";
import { Client } from "../clients/client.entity";

export const databaseProviders = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "37100644",
        database: "multchoicetest"
      });
      sequelize.addModels([Card]);
      sequelize.addModels([Client]);
      await sequelize.sync();
      return sequelize;
    }
  }
];
