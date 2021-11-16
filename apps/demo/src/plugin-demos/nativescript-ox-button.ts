import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptOxButton } from '@demo/shared';
import {} from '@imagene.me/nativescript-ox-button';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptOxButton {}
