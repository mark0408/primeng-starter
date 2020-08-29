import {Component} from '@angular/core';
import {Car} from '../../../../core/models/car';
import {CarService} from '../../../../core/services/carservice';

@Component({
    templateUrl: './orderlistdemo.html'
})
export class OrderListDemo {

    cars: Car[];
    
    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
    }
}