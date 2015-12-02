/// <reference path="../../src/typings/app.d.ts" />
/// <reference path="../../typings/jasmine/jasmine.d.ts" />

import {MessagesService} from "../../src/app/services/services";

describe("Messages Service", () => {
	it("should test message is added to source", () => {
		let service = new MessagesService();
		service.add(1);
		expect(service.add(1).length).toBe(2);
	});
});