import {Injectable} from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor() {
        this.users = [
            {
                userId: 1,
                userName: 'Dmitriy',
                password: '123456',
                role: 'admin',
                token: 'adesgedrgsdfasfds',
            },
            {
                userId: 2,
                userName: 'teacher',
                password: 'teacher',
                role: 'teacher',
                token: 'sgdfkjjgfdssdfsdf',
            },
        ];
    }

    async findOne(userName: string): Promise<User | undefined> {
        return this.users.find(user => user.userName === userName);
    }
    
}