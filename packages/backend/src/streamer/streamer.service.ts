import { Injectable } from '@nestjs/common';
import { Streamer } from '@prisma/client';

import { PrismaService } from '../common/prisma/prisma.service';
import { AddStreamerDto } from './dtos/add-streamer.dto';

@Injectable()
export class StreamerService {
  constructor(private prisma: PrismaService) {}

  addStreamer(data: AddStreamerDto): Promise<Streamer | null> {
    return this.prisma.streamer.create({ data });
  }

  getStreamers(): Promise<Array<Streamer> | null> {
    return this.prisma.streamer.findMany({});
  }

  getStreamerById(id: number): Promise<Streamer | null> {
    return this.prisma.streamer.findUnique({ where: { id } });
  }

  async vote(
    positive: boolean,
    streamerId: number,
    userUuid: string,
  ): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { uuid: userUuid },
    });

    const vote = await this.prisma.vote.create({
      data: {
        streamerId,
        userId: user.id,
        positive,
      },
    });

    return Boolean(vote);
  }
}
