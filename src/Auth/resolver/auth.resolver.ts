// queries and mutations related to users

import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { User } from "../entity/user.auth";
import { CreateUserDto } from '../dto/create-auth.dto';

@Resolver(()=> User)

export class AuthResolver{
    constructor(){}
}