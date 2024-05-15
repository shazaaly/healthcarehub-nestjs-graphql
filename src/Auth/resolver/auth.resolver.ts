// queries and mutations related to users

import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

@Resolver()

export class AuthResolver{
    constructor(private readonly authService AuthService){}
}