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

  private getVotes(streamerId: number) {
    const votesUp = this.prisma.vote.findMany({
      where: {
        streamerId,
        positive: true,
      },
    });
    const votesDown = this.prisma.vote.findMany({
      where: {
        streamerId,
        positive: false,
      },
    });
    return Promise.all([votesUp, votesDown]);
  }

  async getStreamers(uuid: string) {
    const promiseArr = [];
    const streamers = await this.prisma.streamer.findMany({
      include: {
        Vote: {
          include: {
            user: true,
          },
        },
      },
      orderBy: {
        Vote: {
          _count: 'desc',
        },
      },
    });

    streamers.map(({ Vote, ...streamer }) => {
      const votesPromise = this.getVotes(streamer.id).then(
        ([votesUp, votesDown]) => {
          return {
            ...streamer,
            vote: {
              up: {
                voted: Vote.some(
                  (vote) => vote.positive && vote.user.uuid === uuid,
                ),
                amount: votesUp.length,
              },
              down: {
                voted: Vote.some(
                  (vote) => !vote.positive && vote.user.uuid === uuid,
                ),
                amount: votesDown.length,
              },
            },
          };
        },
      );
      promiseArr.push(votesPromise);
    });

    return await Promise.all(promiseArr);
  }

  getStreamerById(id: number): Promise<Streamer | null> {
    return this.prisma.streamer.findUnique({ where: { id } });
  }

  async vote(
    positive: boolean,
    streamerId: number,
    userUuid: string,
  ): Promise<boolean> {
    const isExist = await this.prisma.vote.findFirst({
      where: {
        user: {
          uuid: userUuid,
        },
        streamerId,
      },
    });

    if (isExist) {
      await this.prisma.vote.delete({
        where: {
          id: isExist.id,
        },
      });
      if (isExist.positive === positive) {
        return true;
      }
    }

    const user = await this.prisma.user.findFirst({
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
