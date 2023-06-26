import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async checkSession(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    const userId = request.cookies.userId;

    if (userId) {
      const user = await this.userService.getUser(userId);
      if (user) return { success: true };
    }

    const newUser = await this.userService.createUser();
    if (newUser) {
      response.cookie('userId', newUser.uuid);
      return { success: true };
    }

    return { success: false };
  }
}
