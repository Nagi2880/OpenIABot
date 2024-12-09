import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './users.dto';

@Controller('users')
export class UsersController {
    @Get('allusers')
    FindAllUsers(@Req() req: Request): string{
        return 'there are all users :)'
    }
    @Post()
    CreateUser(@Body() UserDto: CreateUserDto): string{
        return `New user created with the username ${UserDto.username}`
    }
}
