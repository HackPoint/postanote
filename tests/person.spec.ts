/// <reference path="../typings/jasmine/jasmine.d.ts" />

import {Person} from "person";


it("person", (done) => {
	let p = new Person("");
	expect(p.name).toBe("");
    done();
});