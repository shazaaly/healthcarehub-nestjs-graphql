
/*
setup for a NestJS app TypeORM for database access, GraphQL for API layering, 
and uses environment variables for configuration.
*/
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserService } from './user/service/user.service';
import { UserController } from './user/user.controller';
import * as dotenv from 'dotenv'; 
dotenv.config();



// Load environment variables from.env file

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'healthcarehub',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    
    
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile:join(process.cwd(), 'src/schema.gql') //generated schema file will be located in the src d
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
