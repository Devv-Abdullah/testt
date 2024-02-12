import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { HttpStatus } from '@nestjs/common/enums';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  users: User[] =  []
  async create(createUserDto: CreateUserDto) {
    const {password} = createUserDto;
    let length =  this.users.length;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const user = new User({...createUserDto, id: length++, password: hashedPassword});
    this.users.push(user);

    return {
      statusCode: HttpStatus.CREATED,
      message: "Created User Successfully"};
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id)
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.users.find((user) => user.id === id);
    user.updateOne(updateUserDto)
    return {data: user, 
      message: "Updates User Successfully" , 
      statusCode: HttpStatus.OK};
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
