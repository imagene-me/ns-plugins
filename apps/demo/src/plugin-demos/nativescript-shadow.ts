import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptShadow } from '@demo/shared';
import {} from '@imagene.me/nativescript-shadow';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptShadow {}
