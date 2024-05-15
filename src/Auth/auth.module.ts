import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { User } from "./entity/user.auth";
import { AuthService } from "./service/auth.service";


@Module({

    imports:[
        TypeOrmModule.forFeature([User]),
        PassportModule,
        JwtModule.register({
            secret: process.env.SECRET_KEY,
            signOptions  :{expiresIn: '120m'}
        })
    ],
    providers:[AuthService]
})

export class AuthModule {}