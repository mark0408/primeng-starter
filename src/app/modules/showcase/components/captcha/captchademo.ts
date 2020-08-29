import {Component} from '@angular/core';
import {MessageService} from 'primeng/api';
import { ShowcaseComponent } from '../../showcase.component';

@Component({
    templateUrl: './captchademo.html',
    providers: [MessageService]
})
export class CaptchaDemo {
    
    constructor(private messageService: MessageService, private showcase: ShowcaseComponent) {}
    
    showResponse(event) {
        this.messageService.add({severity:'info', summary:'Success', detail: 'User Responsed',sticky: true});
    }

}
