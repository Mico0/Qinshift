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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAddress = void 0;
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let UserAddress = class UserAddress {
    id;
    country;
    city;
    street;
    zipCode;
    user;
};
exports.UserAddress = UserAddress;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserAddress.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'country',
    }),
    __metadata("design:type", String)
], UserAddress.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'city',
    }),
    __metadata("design:type", String)
], UserAddress.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'street',
    }),
    __metadata("design:type", String)
], UserAddress.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'zipcode',
    }),
    __metadata("design:type", String)
], UserAddress.prototype, "zipCode", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.userAddress),
    (0, typeorm_1.JoinColumn)({
        name: 'user_id',
    }),
    __metadata("design:type", user_entity_1.User)
], UserAddress.prototype, "user", void 0);
exports.UserAddress = UserAddress = __decorate([
    (0, typeorm_1.Entity)()
], UserAddress);
//# sourceMappingURL=user-address.entity.js.map