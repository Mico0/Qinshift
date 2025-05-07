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
exports.ProductDetailsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ProductDetailsDto {
    description;
    productionYear;
    madeIn;
    brand;
    warrantyInYears;
}
exports.ProductDetailsDto = ProductDetailsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'description of the product',
        minLength: 3,
        maxLength: 300,
        example: 'The greatest chinese product in history',
    }),
    (0, class_validator_1.IsString)({
        message: 'description of the product is mandatory',
    }),
    (0, class_validator_1.Length)(5, 300),
    __metadata("design:type", String)
], ProductDetailsDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'year of production for the product',
        example: 2023,
        minimum: 1900,
        maximum: 2025,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1900),
    (0, class_validator_1.Max)(2025),
    __metadata("design:type", Number)
], ProductDetailsDto.prototype, "productionYear", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Product's country of origin",
        examples: ['China', 'China', 'China', 'China'],
        minLength: 3,
        maxLength: 30,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 30),
    __metadata("design:type", String)
], ProductDetailsDto.prototype, "madeIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Product's country of origin",
        examples: ['China', 'China', 'China', 'China'],
        minLength: 3,
        maxLength: 30,
    }),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 30),
    __metadata("design:type", String)
], ProductDetailsDto.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'year of production for the product',
        example: 2023,
        minimum: 0,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ProductDetailsDto.prototype, "warrantyInYears", void 0);
//# sourceMappingURL=product-details.dto.js.map