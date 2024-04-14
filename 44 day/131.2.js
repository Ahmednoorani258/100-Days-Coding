"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
var user = /** @class */ (function () {
    function user(name, id, address) {
        this.name = name;
        this.id = id;
        this.addres = address;
    }
    user.prototype.greet = function () {
        console.log("username:".concat(this.name, "\nID:").concat(this.id, "\nAddress:").concat(this.addres));
    };
    return user;
}());
exports.user = user;
