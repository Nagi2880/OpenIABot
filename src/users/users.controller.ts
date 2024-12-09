import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('allusers')
    FindAllUsers(): string{
        return 'there are all users :)'
    }
    @Post()
    CreateUser(): string{
        return 'New user created'
    }
}
