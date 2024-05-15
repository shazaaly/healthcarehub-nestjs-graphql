import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ){}

    findAll(): Promise<User[]>{
        return this.userRepository.find()
    }

    create(createUserDto:CreateUserDto): Promise<User> {
        const user = this.userRepository.create(createUserDto)
        return this.userRepository.save(user)
    }

}
