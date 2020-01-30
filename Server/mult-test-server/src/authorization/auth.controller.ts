import { Controller, Get, Post, Body, UseGuards, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";
import {UsersService} from './users.service';

@Controller()
@Post('login')



