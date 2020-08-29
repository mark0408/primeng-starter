import { Component, OnInit } from '@angular/core';
import { Car } from '../../../../core/models/car';
import { CarService } from '../../../../core/services/carservice';

@Component({
    templateUrl: './tablereorderdemo.html'
})
export class TableReorderDemo implements OnInit {

    cars: Car[];

    cols: any[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    }
}