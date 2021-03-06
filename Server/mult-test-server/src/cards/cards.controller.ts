import { Controller, Get, Post, Body, UseGuards } from "@nestjs/common";
import { CreateCardDto } from "./dto/create-card.dto";
import { CardsService } from "./cards.service";
import { Card } from "./card.entity";
import { AuthGuard } from "./auth.guard";

@Controller("cards")
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() createCardDto: CreateCardDto) {
    await this.cardsService.create(createCardDto);
  }

  @Get()
  async findAll(): Promise<Card[]> {
    return this.cardsService.findAll();
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
