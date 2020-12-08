import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  arrIndicator = [
    {
      indicator: "^VNINDEX", count: 1000, increase: 10, tb: 0
    },
    {
      indicator: "^HASTC", count: 1000, increase: 10, tb: 0
    },
    {
      indicator: "^UPCOM", count: 1000, increase: 10, tb: 0
    },
    {
      indicator: "^VN30", count: 1000, increase: 10, tb: 0
    },
    {
      indicator: "^LARGECAP", count: 1000, increase: 10, tb: 0
    },
    {
      indicator: "^MIDCAP", count: 1000, increase: 10, tb: 0
    }, {
      indicator: "^SMALLCAP", count: 1000, increase: 10, tb: 0
    }

  ]
  arrEventNow = [
    {
      Symbol: "PNJ", ExRightDate: "08/12/2020",
      rate: "6%", priceTC: "77.9",
      matchingPrice: "78.6 (0.7)", changes: "0.9%",
      title: "CTCP Vàng bạc Đá quý Phú Nhuận", isUp: true
    },
    {
      Symbol: "TCI", ExRightDate: "08/12/2020",
      rate: "5%", priceTC: "7",
      matchingPrice: "7 (0)", changes: "0%",
      title: "CTCP Chứng khoán Thành Công", isUp: true
    }, {
      Symbol: "TMG", ExRightDate: "08/12/2020",
      rate: " 5%", priceTC: "34",
      matchingPrice: "34 (0)", changes: "0%",
      title: "CTCP Kim loại màu Thái Nguyên - Vimico", isUp: true
    }, {
      Symbol: "TVB", ExRightDate: "08/12/2020",
      rate: "10%", priceTC: "11.7",
      matchingPrice: "12.5 (0.8)", changes: "6.8%",
      title: "CTCP Chứng khoán Trí Việt", isUp: true
    }, {
      Symbol: "CTI", ExRightDate: "09/12/2020",
      rate: " 12%", priceTC: "15.1",
      matchingPrice: "15.5 (0.4)", changes: "2.3%",
      title: "CTCP Đầu tư Phát triển Cường Thuận IDICO", isUp: true
    },
    {
      Symbol: "IN4", ExRightDate: "09/12/2020",
      rate: " 10%", priceTC: "91.3",
      matchingPrice: "91.3 (0)", changes: "0%",
      title: "CTCP In Số 4", isUp: true
    }, {
      Symbol: "PHR", ExRightDate: "09/12/2020",
      rate: "25%", priceTC: "65.4",
      matchingPrice: "64.8 (-0.6)", changes: "-0.9%",
      title: "CTCP Cao su Phước Hòa", isUp: false
    }, {
      Symbol: "BNA", ExRightDate: "09/12/2020",
      rate: "5%", priceTC: "91.3",
      matchingPrice: "91.3 (0)", changes: "0%",
      title: "Công ty Cổ phần Đầu tư Sản xuất Bảo Ngọc", isUp: true
    }, {
      Symbol: "CEG", ExRightDate: "09/12/2020",
      rate: "   25%", priceTC: "11.8",
      matchingPrice: "11.8 (0)", changes: "0",
      title: "CTCP Tập đoàn Xây dựng và Thiết bị Công nghiệp", isUp: true
    }, {
      Symbol: "FCN", ExRightDate: "10/12/2020",
      rate: "  5%", priceTC: "33.4",
      matchingPrice: "30", changes: "-0,3%",
      title: "CTCP FECON", isUp: false
    }
  ]
  token;
  constructor() {
    this.token = localStorage.getItem("token")
    if (!this.token) {
      window.location.replace("login");
    }
  }
  ngOnInit(): void {
  }


  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + '$';
    }

    return value;
  }
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: '^VNINDEX' },
    { data: [45, 45, 45, 45, 45, 45, 45, 45, 45], "label": "SMA", "type": "line" }
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions = {
    "options": {
      "legend": {
        "text": "You awesome chart with average line",
        "display": true,
      },
      "scales": {
        "yAxes": [{
          "ticks": {
            "beginAtZero": true
          }
        }],
        "xAxes": [{
          "ticks": {
            "min": "Monday",
            "max": "Sunday",
          }
        }],
      }
    }
  }
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
}
