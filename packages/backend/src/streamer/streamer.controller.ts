import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('streamer')
export class StreamerController {
  @Post()
  addStreamer() {}

  @Get()
  getStreamers() {}

  @Get(':id')
  getStreamer() {}

  @Put()
  vote() {}
}
