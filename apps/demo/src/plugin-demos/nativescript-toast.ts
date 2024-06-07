import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptToast } from '@demo/shared';
import { } from '@imagene.me/nativescript-toast';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptToast {
	
}
