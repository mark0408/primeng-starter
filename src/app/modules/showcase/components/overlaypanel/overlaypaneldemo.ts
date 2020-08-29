import {Component} from '@angular/core';
import {OverlayPanel} from 'primeng/overlaypanel';
import {Car} from '../../../../core/models/car';
import {CarService} from '../../../../core/services/carservice';

@Component({
    templateUrl: './overlaypaneldemo.html'
})
export class OverlayPanelDemo {

    cars1: Car[];
    
    cars2: Car[];
    
    selectedCar: Car;
    
    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars1 = cars);
        this.carService.getCarsSmall().then(cars => this.cars2 = cars);
    }
    
    selectCar(event,car: Car, overlaypanel: OverlayPanel) {
        this.selectedCar = car;
        overlaypanel.toggle(event);
    }
}