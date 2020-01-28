import { Controller, Get, Post, Body } from "@nestjs/common";
import { CreateCardDto } from "./dto/create-card.dto";
import { CardsService } from "./cards.service";
import { Card } from "./card.entity";

@Controller("cards")
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  async create(@Body() createCardDto: CreateCardDto) {
    await this.cardsService.create(createCardDto);
  }

  @Get()
  async findAll(): Promise<Card[]> {
    return this.cardsService.findAll();
  }
}
