import { Controller, Post, Body, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { CheckIdentity } from "./dto/user.dto";
import { User } from "./user.entity";
import { UsersService } from "./users.service";

@Controller("admin")
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post("login")
  async authorize(@Body() checkIdentity: CheckIdentity): Promise<User[]> {
    await result: Object = this.usersService.authorize(checkIdentity);
    if(result) {
        return result;
    } throw new UnauthorizedException;
  }

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
      await this.usersService.create(createUserDto)
  }
}
