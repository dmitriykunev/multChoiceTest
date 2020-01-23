import {Injectable} from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'Dmitriy',
                password: '123456',
                role: 'admin',
                token: 'adesgedrgsdfasfds',
            },
            {
                userId: 2,
                username: 'teacher',
                password: 'teacher',
                role: 'teacher',
                token: 'sgdfkjjgfdssdfsdf',
            },
        ];
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
    
}