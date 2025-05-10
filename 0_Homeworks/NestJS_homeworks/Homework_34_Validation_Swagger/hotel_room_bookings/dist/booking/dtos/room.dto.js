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
exports.RoomDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_room_dto_1 = require("./create-room.dto");
class RoomDto extends create_room_dto_1.CreateRoomDto {
    id;
}
exports.RoomDto = RoomDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room ID, a valid UUID string',
        example: '993a8e77-6484-49fd-ae75-1bdaec9e5126',
    }),
    __metadata("design:type", String)
], RoomDto.prototype, "id", void 0);
//# sourceMappingURL=room.dto.js.map