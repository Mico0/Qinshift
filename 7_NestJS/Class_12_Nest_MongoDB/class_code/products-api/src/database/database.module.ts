import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    //We need to use for root async because an instance of configService is needed for the connection configuration object to load the env variables dynamically
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        return {
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USER'),
          password: configService.get('DB_PASS'),
          database: configService.get('DB_NAME'),
          //ONLY USE IN DEVELOPMENT AS IT CAN DELETE OR MODIFY THE DATABASE
          synchronize: configService.get('ENVIRONMENT') === 'DEV',
          // entities: [Product],
          autoLoadEntities: true,
          //Allows us to see sql output sent to the databse in the console
          // logging: true,
          logger: 'formatted-console',
        };
      },
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        return {
          uri: configService.get('MONGO_URI'),
        };
      },
    }),
  ],
})
export class DatabaseModule {}
