import { IsEmail,IsNotEmpty, IsString, MaxLength, MinLength, } from "class-validator";

export type Rol = 'Admin' | 'User'

export class CreateUserDto{
    @IsString()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(14)
    password: string;

    Rol: Rol;

}