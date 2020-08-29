import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'
import {VirtualScrollerDemo} from './virtualscrollerdemo.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{path: '', component: VirtualScrollerDemo}
		])
	],
	exports: [
		RouterModule
	]
})
export class VirtualScrollerDemoRoutingModule {}
