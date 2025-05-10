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
exports.CreateRoomDto = void 0;
const class_validator_1 = require("class-validator");
const room_type_type_1 = require("../types/room-type.type");
const swagger_1 = require("@nestjs/swagger");
class CreateRoomDto {
    roomNumber;
    type;
    price;
    isAvailable;
    amenities;
    maxOccupancy;
    lastCleaned;
    maintenanceNotes;
}
exports.CreateRoomDto = CreateRoomDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The hotel room number',
        minimum: 1,
        maximum: 999,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(999),
    __metadata("design:type", Number)
], CreateRoomDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: room_type_type_1.RoomType,
        description: 'Hotel room type, must be a part of the enum RoomType',
        example: 'Single',
    }),
    (0, class_validator_1.IsEnum)(room_type_type_1.RoomType),
    __metadata("design:type", String)
], CreateRoomDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room price',
        minimum: 50,
        maximum: 1000,
        example: 348,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(50),
    (0, class_validator_1.Max)(1000),
    __metadata("design:type", Number)
], CreateRoomDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Displays room availability true if available or false if not',
        example: true,
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateRoomDto.prototype, "isAvailable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'An array of room amenities if any',
        example: ['Wi-Fi'],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateRoomDto.prototype, "amenities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'A number of max occupancy in one room',
        example: 3,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], CreateRoomDto.prototype, "maxOccupancy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'A valid date string',
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateRoomDto.prototype, "lastCleaned", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'An optional string of maintenance notes',
        example: 'Bathroom toilet clogged',
    }),
    (0, class_validator_1.IsOptional)({ always: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 300),
    __metadata("design:type", String)
], CreateRoomDto.prototype, "maintenanceNotes", void 0);
//# sourceMappingURL=create-room.dto.js.map