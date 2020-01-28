import { Module } from "@nestjs/common";
import { CardsController } from "./cards.controller";
import { CardsService } from "./cards.service";
import { cardsProviders } from "./cards.providers";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [CardsController],
  providers: [CardsService, ...cardsProviders]
})
export class CardsModule {}
