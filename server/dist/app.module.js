"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const track_module_1 = require("./track/track.module");
const mongoose_1 = require("@nestjs/mongoose");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://jeka:jeka@cluster0-shard-00-00.hthzy.mongodb.net:27017,cluster0-shard-00-01.hthzy.mongodb.net:27017,cluster0-shard-00-02.hthzy.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-q12mxw-shard-0&authSource=admin&retryWrites=true&w=majority'),
            track_module_1.TrackModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map