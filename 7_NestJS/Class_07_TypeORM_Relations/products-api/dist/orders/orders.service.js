"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("./entities/order.entity");
const typeorm_2 = require("typeorm");
const FK_PG_CODE = '23503';
let OrdersService = class OrdersService {
    ordersRepo;
    constructor(ordersRepo) {
        this.ordersRepo = ordersRepo;
    }
    async create(createOrderDto) {
        try {
            const newOrder = await this.ordersRepo.save({
                ...createOrderDto,
                user: {
                    id: createOrderDto.user,
                },
                products: createOrderDto.products.map((productId) => {
                    return { id: productId };
                }),
            });
            return newOrder;
        }
        catch (error) {
            console.log(error);
            if (error.code === FK_PG_CODE) {
                throw new common_1.BadRequestException('Invalid references added');
            }
            throw new common_1.InternalServerErrorException(error.messsage);
        }
    }
    findAll() {
        return this.ordersRepo.find({
            loadEagerRelations: false,
        });
    }
    async findOne(id) {
        const foundOrder = await this.ordersRepo.findOne({
            where: { id },
            relations: {
                user: true,
                products: true,
            },
        });
        if (!foundOrder)
            throw new common_1.NotFoundException('Order not found');
        return foundOrder;
    }
    update(id, updateOrderDto) {
        return `This action updates a #${id} order`;
    }
    remove(id) {
        return `This action removes a #${id} order`;
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrdersService);
//# sourceMappingURL=orders.service.js.map