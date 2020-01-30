import { Module } from "@nestjs/common";
import { ClientsController } from "./client.controller";
import { ClientsService } from "./clients.service";
import { clientsProviders } from "./clients.providers";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [ClientsController],
  providers: [ClientsService, ...clientsProviders]
})
export class ClientsModule {}
