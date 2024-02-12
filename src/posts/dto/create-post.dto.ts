import { IsNotEmpty, IsUrl, MaxLength } from "class-validator";

export class CreatePostDto {
    @MaxLength(2200)
    @IsNotEmpty()
    text: string;

    @IsUrl(undefined,{
        message: "Image must be a valid URL",
        })
    @IsNotEmpty()
    image: string; //url

    createdAt = new Date().toISOString();
    updatedAt = new Date().toISOString();
}
