import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../entity/user.auth';

@ObjectType()
export class AuthResponse {
  @Field()
  token: string;

  @Field(() => User)
  user: User;
}