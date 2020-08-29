import {Component,OnDestroy} from '@angular/core';
import {DialogService} from 'primeng/dynamicdialog';
import {MessageService} from 'primeng/api';
import {CarsListDemo} from './carslistdemo';
import {Car} from '../../../../core/models/car';
import { ShowcaseComponent } from '../../showcase.component';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService, MessageService]
})
export class DynamicDialogDemo implements OnDestroy {

    constructor(public dialogService: DialogService, public messageService: MessageService, private showcase: ShowcaseComponent) {}

    ref: DynamicDialogRef;

    show() {
        this.ref = this.dialogService.open(CarsListDemo, {
            header: 'Choose a Car',
            width: '70%',
            contentStyle: {"max-height": "350px", "overflow": "auto"},
            baseZIndex: 10000
        });

        this.ref.onClose.subscribe((car: Car) =>{
            if (car) {
                this.messageService.add({severity:'info', summary: 'Car Selected', detail:'Vin:' + car.vin});
            }
        });
    }

    ngOnDestroy() {
        if (this.ref) {
            this.ref.close();
        }
    }
}


