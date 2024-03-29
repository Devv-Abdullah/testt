import { IsEnum, IsISO8601, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength, isISO8601 } from "class-validator";
import { Gender } from "src/shared/enums/gender.enum";

export class CreateUserDto {
    id:number;


    @IsString()
    @IsNotEmpty({message: "Username must be provided"})
    username: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsEnum(Gender)
    @IsNumber(
        {allowInfinity: false, allowNaN: false, }, 
        {message: "Gender must be a number"},
    )
    @IsNotEmpty()
    gender:  Gender;

    @IsISO8601()
    @IsNotEmpty()
    birthday:string;

    @MaxLength(20)
    @MinLength(3)
    @IsNotEmpty()
    @IsOptional()
    city: string;
}
