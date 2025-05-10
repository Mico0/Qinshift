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
exports.BookingController = void 0;
const common_1 = require("@nestjs/common");
const booking_service_1 = require("./booking.service");
const swagger_1 = require("@nestjs/swagger");
const create_room_dto_1 = require("./dtos/create-room.dto");
const update_room_dto_1 = require("./dtos/update-room.dto");
const room_type_type_1 = require("./types/room-type.type");
let BookingController = class BookingController {
    bookingService;
    constructor(bookingService) {
        this.bookingService = bookingService;
    }
    getAllRooms(availability, roomType) {
        const roomFilters = {};
        if (availability === 'true') {
            roomFilters.availability = true;
        }
        else if (availability === 'false') {
            roomFilters.availability = false;
        }
        if (roomType && Object.values(room_type_type_1.RoomType).includes(roomType)) {
            roomFilters.roomType = roomType;
        }
        return this.bookingService.getAllRooms(roomFilters);
    }
    getRoom(id) {
        return this.bookingService.getRoom(id);
    }
    createRoom(data) {
        return this.bookingService.createRoom(data);
    }
    updateRoom(id, updateData) {
        return this.bookingService.updateRoom(id, updateData);
    }
    deleteRoom(id) {
        return this.bookingService.deleteRoom(id);
    }
};
exports.BookingController = BookingController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Returns all hotel rooms' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('availability')),
    __param(1, (0, common_1.Query)('roomType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], BookingController.prototype, "getAllRooms", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Returns one hotel room based on the ID parameter sent in the URL',
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookingController.prototype, "getRoom", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Creates a new room' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_room_dto_1.CreateRoomDto]),
    __metadata("design:returntype", void 0)
], BookingController.prototype, "createRoom", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Updates the room information' }),
    (0, common_1.HttpCode)(204),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_room_dto_1.UpdateRoomDto]),
    __metadata("design:returntype", void 0)
], BookingController.prototype, "updateRoom", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Removes a room by ID' }),
    (0, common_1.HttpCode)(204),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookingController.prototype, "deleteRoom", null);
exports.BookingController = BookingController = __decorate([
    (0, common_1.Controller)('booking'),
    __metadata("design:paramtypes", [booking_service_1.BookingService])
], BookingController);
//# sourceMappingURL=booking.controller.js.map