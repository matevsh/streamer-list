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
    const cookieUserId = request.cookies['userId'];

    if (cookieUserId) {
      const dbRes = await this.userService.checkUserId(cookieUserId);
      if (dbRes) return { success: true };
    }

    const generatedUser = await this.userService.createUser();
    if (generatedUser) {
      response.cookie('userId', generatedUser.uuid);
      return { success: true };
    }

    return { success: false };
  }
}
