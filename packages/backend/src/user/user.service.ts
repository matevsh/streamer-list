import { Injectable } from '@nestjs/common';

import { PrismaService } from '../common/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  createUser() {
    return this.prisma.user.create({ data: {} });
  }

  getUser(userId: string) {
    return this.prisma.user.findFirst({
      where: {
        uuid: userId,
      },
    });
  }
}
