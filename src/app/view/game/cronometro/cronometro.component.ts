import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    return setInterval(() => { this.showTime() }, 1000)
  }

  // Function to display the time


  time = null;

  
  showTime() {


    let date = new Date();


    let h: any = date.getHours();

    let m: any = date.getMinutes(); // 0 - 59


    let s: any = date.getSeconds(); // 0 - 59


    let session = "AM";


    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":"
      + s + " " + session;

    this.time = time;
    

    
  }

}
