import { Injectable, Inject, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
  constructor(
    @Inject("USERS_REPOSITORY") private readonly usersRepository: typeof User
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.role = createUserDto.role;
    user.token = createUserDto.token;
    return user.save();
  }

  async authorize(checkIdentity): Promise<User[]> {
    const result = await this.usersRepository.findAll<User>({
      where: {
        username: checkIdentity.username,
        password: checkIdentity.password
      }
    });
    if (result.length === 0) {
      throw new UnauthorizedException();
    } else {
      return result;
    }
  }

  async authorizeToken(checkToken): Promise<User[]> {
    const result = await this.usersRepository.findAll<User>({
      where: {
        token: checkToken.token,
        username: checkToken.username
      }
    });
    if (result.length === 0) {
      throw new UnauthorizedException();
    } else {
      return result;
    }
  }
}
