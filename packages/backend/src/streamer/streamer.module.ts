import { Module } from '@nestjs/common';
import { StreamerService } from './streamer.service';
import { StreamerController } from './streamer.controller';
import { PrismaService } from '../common/prisma/prisma.service';

@Module({
  providers: [StreamerService, PrismaService],
  controllers: [StreamerController],
})
export class StreamerModule {}
