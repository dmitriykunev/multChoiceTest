export class CreateCardDto {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
  readonly level: string;
  readonly theory: string;
  readonly option_a: string;
  readonly option_b: string;
  readonly option_c: string;
  readonly option_d: string;
}
