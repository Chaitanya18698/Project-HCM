import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.styl']
})
export class EmployeeManagementComponent implements OnInit {
  

  constructor() {
    this.options = {
      chart: { type: 'variablepie' },
      title: { text: 'Countries compared by population density and total area.' },
      tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          'Area (square km): <b>{point.y}</b><br/>' +
          'Population density (people per square km): <b>{point.z}</b><br/>'
  },
  series: [{
    minPointSize: 10,
    innerSize: '80%',
    zMin: 0,
    name: 'countries',
    data: [{
        name: 'Spain',
        y: 505370,
        z: 100
    }, {
        name: 'Poland',
        y: 312685,
        z: 100
    }]
}]
    }

}
chart: Object;
options: Object;
saveInstance(chartInstance) {
  this.chart = chartInstance;
}



ngOnInit() { }
}