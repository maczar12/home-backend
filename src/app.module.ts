import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CronModule } from './cron/cron.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from './config/config.module';
import { VacationModule } from './vacation/vacation.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [
    CronModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    ConfigModule,
    VacationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
