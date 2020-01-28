import { Card } from "./card.entity";

export const cardProviders = [
  {
    provide: "CARD_REPOSITORY",
    useValue: Card
  }
];
