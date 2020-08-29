import {Component,OnInit} from '@angular/core';
import {Car} from '../../../../core/models/car';
import {CarService} from '../../../../core/services/carservice';

@Component({
    templateUrl: './inplacedemo.html'
})
export class InplaceDemo implements OnInit {

    cars: Car[];
        
    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
    }
}