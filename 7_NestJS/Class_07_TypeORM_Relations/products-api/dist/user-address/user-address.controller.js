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
exports.UserAddressController = void 0;
const common_1 = require("@nestjs/common");
const user_address_service_1 = require("./user-address.service");
const create_user_address_dto_1 = require("./dto/create-user-address.dto");
const update_user_address_dto_1 = require("./dto/update-user-address.dto");
let UserAddressController = class UserAddressController {
    userAddressService;
    constructor(userAddressService) {
        this.userAddressService = userAddressService;
    }
    create(createUserAddressDto) {
        return this.userAddressService.create(createUserAddressDto);
    }
    findAll() {
        return this.userAddressService.findAll();
    }
    findOne(id) {
        return this.userAddressService.findOne(+id);
    }
    update(id, updateUserAddressDto) {
        return this.userAddressService.update(+id, updateUserAddressDto);
    }
    remove(id) {
        return this.userAddressService.remove(+id);
    }
};
exports.UserAddressController = UserAddressController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_address_dto_1.CreateUserAddressDto]),
    __metadata("design:returntype", void 0)
], UserAddressController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserAddressController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserAddressController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_address_dto_1.UpdateUserAddressDto]),
    __metadata("design:returntype", void 0)
], UserAddressController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserAddressController.prototype, "remove", null);
exports.UserAddressController = UserAddressController = __decorate([
    (0, common_1.Controller)('user-address'),
    __metadata("design:paramtypes", [user_address_service_1.UserAddressService])
], UserAddressController);
//# sourceMappingURL=user-address.controller.js.map