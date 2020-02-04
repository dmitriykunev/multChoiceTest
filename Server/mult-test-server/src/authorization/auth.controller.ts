import {
  Controller,
  Post,
  Body,
  Get,
  UnauthorizedException
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { CheckIdentity } from "./dto/user.dto";
import { CheckToken } from "./dto/token.dto";
import { User } from "./user.entity";
import { UsersService } from "./users.service";

@Controller("admin")
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post("login")
  async authorize(@Body() checkIdentity: CheckIdentity): Promise<User[]> {
    let result: any = {};
    result = await this.usersService.authorize(checkIdentity);
    if (result) {
      return result;
    }
  }

  @Get("token")
  async authorizeToken(@Body() checkToken: CheckToken): Promise<User[]> {
    let result: any = {};
    if (checkToken.token === undefined) {
      throw new UnauthorizedException();
    } else {
      result = await this.usersService.authorizeToken(checkToken);
      if (result) {
        return result;
      }
    }
  }

  @Post("register")
  async create(@Body() createUserDto: CreateUserDto) {
    await this.usersService.create(createUserDto);
  }
}
