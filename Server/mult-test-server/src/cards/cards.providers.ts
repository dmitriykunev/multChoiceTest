import { Card } from "./card.entity";

export const cardsProviders = [
  {
    provide: "CARDS_REPOSITORY",
    useValue: Card
  }
];
