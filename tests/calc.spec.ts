/// <reference path="../typings/jasmine/jasmine.d.ts" />
import { Calculator } from "calc"

it('should add', (done) => {
    let c = new Calculator();
    expect(c.add(1, 2)).toBe(3);
    done();
});

it('should fail', (done) => {
    expect(false).toBe(false);
    done();
});