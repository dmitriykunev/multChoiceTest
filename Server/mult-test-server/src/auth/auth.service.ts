import { Injectable } from '@nestjs/common';
import { UsersService} from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
        ) {}

    async validateUser(userName: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(userName);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { userName: user.userName, sub:user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}