import {Component} from '@angular/core';
import {MessageService} from 'primeng/api';
import { ShowcaseComponent } from '../../showcase.component';

@Component({
    templateUrl: './tabviewdemo.html',
    providers: [MessageService]
})
export class TabViewDemo {
    
    constructor(private messageService: MessageService, private showcase: ShowcaseComponent) {}
    
    onTabChange(event) {
        this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    }

}
