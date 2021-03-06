var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../typings/app.d.ts" />
var angular2_1 = require("angular2/angular2");
var MessagesService = (function () {
    /**
     *
     */
    function MessagesService() {
        this.messages = new Array();
    }
    MessagesService.prototype.add = function (n) {
        this.messages.push(n);
        return this.messages;
    };
    MessagesService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MessagesService);
    return MessagesService;
})();
exports.MessagesService = MessagesService;
exports.messagesServiceInjectables = [
    angular2_1.bind(MessagesService).toClass(MessagesService)
];
//# sourceMappingURL=http.js.map