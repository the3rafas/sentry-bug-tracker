import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class UserService {
  async create(data: CreateUserInput) {
    return await prisma.user.create({
      data,
    });
  }

  async findAll() {
    if (
      await prisma.user.findMany({
        where: {
          id: 'aaa',
        },
      })
    ) {
      throw new Error('aaaaaaaaaaaaaaaaaaaaa');
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
