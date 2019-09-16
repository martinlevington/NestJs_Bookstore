import { IsEmail, IsNotEmpty, Allow, IsNumber, IsInt } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateBookDTO {

    @Transform(id => parseInt(id))
    @IsNotEmpty()
    @IsInt()
    readonly id: number;

     @Allow()
     readonly title: string;
     @Allow()
     readonly description: string;
     @Allow()
     readonly author: string;
}