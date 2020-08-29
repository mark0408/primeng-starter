import {Component} from '@angular/core';
import {Car} from '../../../../core/models/car';
import {CarService} from '../../../../core/services/carservice';

@Component({
    templateUrl: './picklistdemo.html'
})
export class PickListDemo {

    sourceCars: Car[];
    
    targetCars: Car[];
    
    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.sourceCars = cars);
        this.targetCars = [];
    }
}