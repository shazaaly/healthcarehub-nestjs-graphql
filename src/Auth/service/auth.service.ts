import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.auth';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dto/login.dto';
import { AuthResponse } from '../dto/auth-response.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async login(loginDto: LoginDto): Promise<AuthResponse> {
    const user = await this.userRepository.findOne({
        where: {email: loginDto.email}
    })
    if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }
    const passwordMatch = await bcrypt.compare(loginDto.password, user.password)
    if(user){
        const token = this.jwtService.sign({id: user.id})
        return {token, user}
    }
    return null
  }
}
