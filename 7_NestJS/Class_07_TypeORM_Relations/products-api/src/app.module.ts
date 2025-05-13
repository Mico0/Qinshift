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
    //We need to use for root async because an instance of configService is needed for the connection configuration object to load the env variables dynamically

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        console.log('DB_HOST:', configService.get('DB_HOST'));
        console.log('DB_PORT:', configService.get('DB_PORT'));
        console.log('DB_USER:', configService.get('DB_USER'));
        console.log('DB_PASS:', configService.get('DB_PASS'));
        console.log('DB_NAME:', configService.get('DB_NAME'));
        console.log('ENVIRONMENT:', configService.get('ENVIRONMENT'));
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
        };
      },
    }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'postgres',
    //   database: 'postgres',
    //   entities: [Product],
    //   synchronize: true,
    // }),
    ProductsModule,
    UsersModule,
    UserAddressModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
