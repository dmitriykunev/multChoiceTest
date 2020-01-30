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

  @Get("advanced")
  async findAllAdvanced(): Promise<Card[]> {
    return this.cardsService.findAllAdvanced();
  }

  @Get("upperintermediate")
  async findAllUpperIntermediate(): Promise<Card[]> {
    return this.cardsService.findAllUpperIntermediate();
  }

  @Get("intermediate")
  async findAllIntermediate(): Promise<Card[]> {
    return this.cardsService.findAllIntermediate();
  }

  @Get("preintermediate")
  async findAllPreIntermediate(): Promise<Card[]> {
    return this.cardsService.findAllPreIntermediate();
  }

  @Get("elementary")
  async findAllElementary(): Promise<Card[]> {
    return this.cardsService.findAllElementary();
  }
}
