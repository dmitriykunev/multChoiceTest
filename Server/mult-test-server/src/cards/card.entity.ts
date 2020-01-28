import { Table, Column, Model } from "sequelize-typescript";

@Table
export class Card extends Model<Card> {
  @Column
  id: string;

  @Column
  question: string;

  @Column
  answer: string;

  @Column
  level: string;

  @Column
  theory: string;

  @Column
  option_a: string;

  @Column
  option_b: string;

  @Column
  option_c: string;

  @Column
  option_d: string;
}
