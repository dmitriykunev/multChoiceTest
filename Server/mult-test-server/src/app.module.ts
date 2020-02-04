import { Module } from "@nestjs/common";
import { CardsModule } from "./cards/cards.module";
import { ClientsModule } from "./clients/clients.module";
import { UsersModule } from "./authorization/auth.module";

@Module({
  imports: [CardsModule, ClientsModule, UsersModule]
})
export class AppModule {}
