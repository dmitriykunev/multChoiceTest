import { Table, Column, Model } from "sequelize-typescript";

@Table
export class User extends Model<User> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  })
  userId: number;

  @Column
  username: string;

  @Column
  password: string;

  @Column
  role: string;

  @Column
  token: string;
}
