import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { UsersService } from "./users.service";
import { usersProviders } from "./users.providers";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [UsersService, ...usersProviders]
})
export class UsersModule {}
