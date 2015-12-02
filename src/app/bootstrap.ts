import {bootstrap, bind, View, Component } from "angular2/angular2";
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig, HashLocationStrategy, LocationStrategy} from 'angular2/router';

/*
 * Injectables
 */
import {servicesInjectable} from "./services/services";
import {DashboardComponent} from "./components/DashboardComponent";
/*
 * Services
 */
import {MessagesService} from "./services/services";


@Component({
	selector: "notes-app",
	template: `
		<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/', as: 'Dashboard', component: DashboardComponent },
])
class NotesApp {
	constructor() {

	}
}

bootstrap(NotesApp, [
	servicesInjectable,
	ROUTER_PROVIDERS, 
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);