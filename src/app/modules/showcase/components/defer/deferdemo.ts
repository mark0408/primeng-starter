import {Component} from '@angular/core';
import {Car} from '../../../../core/models/car';
import {CarService} from '../../../../core/services/carservice';
import {MessageService} from 'primeng/api';
import {  ShowcaseComponent } from '../../showcase.component';

@Component({
    templateUrl: './deferdemo.html',
    providers: [MessageService]
})
export class DeferDemo {

    cars: Car[];
    
    constructor(private carService: CarService, private messageService: MessageService, private showcase: ShowcaseComponent) { }
    
    initData() {
        this.messageService.add({severity:'success', summary:'Data Initialized', detail:'Render Completed'});
        this.carService.getCarsSmall().then(cars => this.cars = cars);
    }
}
