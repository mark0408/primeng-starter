import { Component, OnInit } from '@angular/core';
import { Car } from '../../../../core/models/car';
import { CarService } from '../../../../core/services/carservice';

@Component({
    templateUrl: './tablebasicdemo.html',
})
export class TableBasicDemo implements OnInit {

    cars: Car[];

    cols: any[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
    }
}