import { Component } from '@angular/core';
import { PlotBand } from '@progress/kendo-angular-charts';
import { samplesGoals } from './data';

@Component({
    selector: 'my-app',
    templateUrl: './result.html'
    })
export class AppComponent {
    plotList: any;

     constructor() {
     this.plotLists = samplesGoals;

     console.log(this.plotList);
    }

    public labelContent = (e: any) => {
    let reducedValue = "";
    if(e.value >=0 && e.value <= 999)
    {
      reducedValue = e.value;  
    }
    else if (e.value >= 1000 && e.value <= 999999) { // thousands
    reducedValue = (e.value / 1000) + "k";
    } else if (e.value >= 1000000 && e.value <= 999999999) { // millions
        reducedValue = (e.value / 1000000) + "m";
    } else if (e.value >= 1000000000 && e.value <= 999999999999) { // billions
        reducedValue = (e.value / 1000000000) + "b";
    }

    return reducedValue
}
 }
