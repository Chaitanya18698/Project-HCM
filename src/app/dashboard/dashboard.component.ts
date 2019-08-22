import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {

constructor() {
        this.options = {
          chart: { type: 'spline' },
          title: { text : 'dynamic data example'},
          series: [{ data: [2,3,5,8,13] }]
        };
    }
    chart : Object;
    options: Object;
    saveInstance(chartInstance) {
        this.chart = chartInstance;
    }


  ngOnInit() {
    
  }

}
