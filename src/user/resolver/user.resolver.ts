// queries and mutations related to users

import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { User } from "../entity/user.entity";
import { UserService } from "../service/user.service";
import { CreateUserDto } from '../dto/create-user.dto';

@Resolver(()=> User)

export class UserResolver{
    constructor(private readonly userService: UserService){}

    @Query(()=> [User])
    users(){
        return this.userService.findAll()
    }

    @Mutation(()=> User)
    createUser(@Args('createUserDto') createUserDto: CreateUserDto){
        return this.userService.create(createUserDto)
    }
}