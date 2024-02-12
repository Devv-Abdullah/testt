import { UpdateUserDto } from "src/users/dto/update-user.dto";
import { User } from "src/users/entities/user.entity";
import { CreatePostDto } from "../dto/create-post.dto";
import { CreateUserDto } from "src/users/dto/create-user.dto";

export class Post {
    author: User;

    text: string;

    image: string; //URL

    createdAt: string; //Time of creation

    updatedAt: string; //last date of updating

    constructor(createPostDto: CreatePostDto){
        Object.assign(this, CreateUserDto);
    }

    updateOne(updateUserDto: UpdateUserDto){
        Object.assign(this, {...this, ...updateUserDto});
    }

    addAuthor(author) {
        this.author = author;
    }
}
