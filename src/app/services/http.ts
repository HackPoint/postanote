/// <reference path="../../typings/app.d.ts" />
import {Injectable, bind} from "angular2/angular2";

@Injectable()
export class MessagesService {
	private messages: Array<number>;
	/**
	 *
	 */
	constructor() {
		this.messages = new Array<number>();
	}
	public add(n : number) : Array<number> {
		this.messages.push(n);
		return this.messages;
	}
}

export var messagesServiceInjectables: Array<any> = [
  bind(MessagesService).toClass(MessagesService)
];