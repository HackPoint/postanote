var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
/*
 * Injectables
 */
var services_1 = require("./services/services");
var DashboardComponent_1 = require("./components/DashboardComponent");
var NotesApp = (function () {
    function NotesApp() {
    }
    NotesApp = __decorate([
        angular2_1.Component({
            selector: "notes-app",
            template: "\n\t\t<router-outlet></router-outlet>\n\t",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_2.RouteConfig([
            { path: '/', as: 'Dashboard', component: DashboardComponent_1.DashboardComponent },
        ]), 
        __metadata('design:paramtypes', [])
    ], NotesApp);
    return NotesApp;
})();
angular2_1.bootstrap(NotesApp, [
    services_1.servicesInjectable,
    router_1.ROUTER_PROVIDERS,
    angular2_1.bind(router_2.LocationStrategy).toClass(router_2.HashLocationStrategy)
]);
//# sourceMappingURL=bootstrap.js.map