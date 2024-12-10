import { IsEmail,IsIn,IsNotEmpty, IsString, MaxLength, MinLength, } from "class-validator";

export type Rol = 'Admin' | 'User' | 'Seller'

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(14)
    password: string;

    @IsIn(['Admin','User','Seller'])
    rol: Rol;

}