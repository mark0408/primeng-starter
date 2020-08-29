import {Component} from '@angular/core';
import {MessageService} from 'primeng/api';
import { ShowcaseComponent } from '../../showcase.component';

@Component({
    templateUrl: './fileuploaddemo.html',
    providers: [MessageService]
})
export class FileUploadDemo {
    
    uploadedFiles: any[] = [];
    
    constructor(private messageService: MessageService, private showcase: ShowcaseComponent) {}

    onUpload(event) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }
        
        this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }
    
    onBasicUpload(event) {
        this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }
    
    onBasicUploadAuto(event) {
        this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
    }
    
}
