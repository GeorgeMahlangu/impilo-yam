import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @ViewChild('pieCanvas') private pieCanvas: ElementRef;

  pieChart: any;
  probabilities: any = {};
  constructor(private api: ApiService) {
    this.probabilities = this.api.probabilities;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.pieChartLoad();
  }

  pieChartLoad(): void {
    this.pieChart = new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Normal', 'Mild', 'Moderate', 'Severe', 'Extremely Severe'],
        datasets: [
          {
            data: [
              this.probabilities.Normal,
              this.probabilities.Mild,
              this.probabilities.Moderate,
              this.probabilities.Severe,
              this.probabilities['Extremely Severe'],
            ],
            backgroundColor: [
              '#28a745',
              '#ffc107',
              '#fd7e14',
              '#e8112d',
              '#7c1e3f',
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Diagnoses Probabilities',
          },
        },
      },
    });
  }
}
