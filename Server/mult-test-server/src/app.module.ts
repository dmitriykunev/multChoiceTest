import { Module } from "@nestjs/common";
import { CardsModule } from "./cards/cards.module";
import { ClientsModule } from "./clients/clients.module";

@Module({
  imports: [CardsModule, ClientsModule]
})
export class AppModule {}
