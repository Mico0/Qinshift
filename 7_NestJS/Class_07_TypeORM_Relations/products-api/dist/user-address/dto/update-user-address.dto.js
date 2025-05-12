"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserAddressDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_address_dto_1 = require("./create-user-address.dto");
class UpdateUserAddressDto extends (0, mapped_types_1.PartialType)(create_user_address_dto_1.CreateUserAddressDto) {
}
exports.UpdateUserAddressDto = UpdateUserAddressDto;
//# sourceMappingURL=update-user-address.dto.js.map