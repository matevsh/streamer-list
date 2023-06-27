import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

import { AddStreamerDto } from './dtos/add-streamer.dto';
import { StreamerService } from './streamer.service';
import { VoteDto } from './dtos/vote.dto';

@Controller('streamer')
export class StreamerController {
  constructor(private streamerService: StreamerService) {}

  @Post()
  async addStreamer(@Body() body: AddStreamerDto) {
    const streamer = await this.streamerService.addStreamer(body);
    return { success: Boolean(streamer) };
  }

  @Get()
  async getStreamers(@Req() request: Request) {
    const { userId } = request.cookies;

    const streamers = await this.streamerService.getStreamers(userId);
    return { success: Boolean(streamers), data: streamers };
  }

  @Get(':id')
  async getStreamer(@Param('id', new ParseIntPipe()) streamerId: number) {
    const streamer = await this.streamerService.getStreamerById(streamerId);
    return { success: Boolean(streamer), data: streamer };
  }

  @Put()
  async vote(
    @Req() request: Request,
    @Body() { streamerId, positive }: VoteDto,
  ) {
    const { userId } = request.cookies;

    const result = await this.streamerService.vote(
      positive,
      streamerId,
      userId,
    );
    return { success: Boolean(result) };
  }
}
