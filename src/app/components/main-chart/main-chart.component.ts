import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.scss']
})
export class MainChartComponent implements OnInit {

  constructor() { }
  showFiller
  ngOnInit(): void {
    this.showFiller =false
  }

}
