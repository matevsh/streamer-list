import { Injectable } from '@nestjs/common';
import { Streamer } from '@prisma/client';

import { PrismaService } from '../common/prisma/prisma.service';
import { AddStreamerDto } from './dtos/add-streamer.dto';
import { VoteWithUser } from './streamer.types';

@Injectable()
export class StreamerService {
  constructor(private prisma: PrismaService) {}

  private processVotes(votes: VoteWithUser[], uuid: string) {
    const value = {
      up: { voted: false, amount: 0 },
      down: { voted: false, amount: 0 },
    };

    votes.forEach((vote) => {
      if (vote.user.uuid === uuid) {
        vote.positive ? (value.up.voted = true) : (value.down.voted = true);
      }

      vote.positive ? (value.up.amount += 1) : (value.down.amount += 1);
    });

    return value;
  }

  addStreamer(data: AddStreamerDto): Promise<Streamer | null> {
    return this.prisma.streamer.create({ data });
  }

  async getStreamers(uuid: string) {
    const streamers = await this.prisma.streamer.findMany({
      include: { Vote: { include: { user: true } } },
      orderBy: { Vote: { _count: 'desc' } },
    });

    return streamers.map(({ Vote, ...streamer }) => {
      return { ...streamer, vote: this.processVotes(Vote, uuid) };
    });
  }

  async getStreamerById(streamerId: number, uuid: string) {
    const { Vote, ...streamer } = await this.prisma.streamer.findUnique({
      where: { id: streamerId },
      include: {
        Vote: { include: { user: true } },
      },
    });

    return { ...streamer, vote: this.processVotes(Vote, uuid) };
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
