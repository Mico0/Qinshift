import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { UserAddressModule } from './user-address/user-address.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
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
          // ONLY USE IN DEVELOPMENT AS IT CAN DELETE OR MODIFY THE DATABASE
          synchronize: configService.get('ENVIRONMENT') === 'DEV',
          // entities: [Product],
          autoLoadEntities: true,
        };
      },
    }),
    UsersModule,
    ProductsModule,
    UserAddressModule,
    OrdersModule,
  ],
  //   TypeOrmModule.forRoot({
  //     type: 'postgres',
  //     host: 'localhost',
  //     port: 5432,
  //     username: 'postgres',
  //     password: 'postgres',
  //     database: 'postgres',
  //     entities: [Product],
  //     synchronize: true,
  //   }),
  //   ProductsModule,
  // ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
