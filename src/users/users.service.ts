import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    FindUsers(): string {
        return 'there are all users :)'
    }
}
