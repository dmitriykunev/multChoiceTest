import { Table, Column, Model } from "sequelize-typescript";

@Table
export class Client extends Model<Client> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  })
  clientId: number;

  @Column
  username: string;

  @Column
  phone: string;

  @Column
  level: string;

  @Column
  result: string;

  @Column({
    allowNull: true
  })
  note: string;
}
