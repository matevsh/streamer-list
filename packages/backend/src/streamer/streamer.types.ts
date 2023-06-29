import { Prisma } from '@prisma/client';

const voteWithUser = Prisma.validator<Prisma.VoteArgs>()({
  include: { user: true },
});

export type VoteWithUser = Prisma.VoteGetPayload<typeof voteWithUser>;
