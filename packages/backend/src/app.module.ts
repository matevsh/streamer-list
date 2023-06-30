import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { UserModule } from './user/user.module';
import { StreamerModule } from './streamer/streamer.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CommonModule, UserModule, StreamerModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
