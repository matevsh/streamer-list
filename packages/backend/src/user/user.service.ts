import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

import { PrismaService } from '../common/prisma/prisma.service';

type UserOrErr = User | null;

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  createUser(): Promise<UserOrErr> {
    return this.prisma.user.create({ data: {} }).catch(() => null);
  }

  checkUserId(userId: string): Promise<UserOrErr> {
    return this.prisma.user
      .findFirst({
        where: {
          uuid: userId,
        },
      })
      .catch(() => null);
  }
}
