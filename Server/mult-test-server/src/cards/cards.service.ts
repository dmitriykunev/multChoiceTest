import { Injectable, Inject } from "@nestjs/common";
import { CreateCardDto } from "./dto/create-card.dto";
import { Card } from "./card.entity";

@Injectable()
export class CardsService {
  constructor(
    @Inject("CARDS_REPOSITORY") private readonly cardsRepository: typeof Card
  ) {}

  async create(createCardDto: CreateCardDto): Promise<Card> {
    const card = new Card();
    card.question = createCardDto.question;
    card.answer = createCardDto.answer;
    card.theory = createCardDto.theory;
    card.level = createCardDto.level;
    card.option_a = createCardDto.option_a;
    card.option_b = createCardDto.option_b;
    card.option_c = createCardDto.option_c;
    card.option_d = createCardDto.option_d;
    return card.save();
  }

  async findAllAdvanced(): Promise<Card[]> {
    return this.cardsRepository.findAll<Card>({
      where: {
        level: "Advanced"
      }
    });
  }

  async findAllUpperIntermediate(): Promise<Card[]> {
    return this.cardsRepository.findAll<Card>({
      where: {
        level: "UpperIntermediate"
      }
    });
  }

  async findAllIntermediate(): Promise<Card[]> {
    return this.cardsRepository.findAll<Card>({
      where: {
        level: "Intermediate"
      }
    });
  }

  async findAllPreIntermediate(): Promise<Card[]> {
    return this.cardsRepository.findAll<Card>({
      where: {
        level: "PreIntermediate"
      }
    });
  }

  async findAllElementary(): Promise<Card[]> {
    return this.cardsRepository.findAll<Card>({
      where: {
        level: "Elementary"
      }
    });
  }
}
