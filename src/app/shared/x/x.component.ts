import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent implements OnInit {

  @Input() size = 'big';

  constructor() { }

  ngOnInit() {
  }

}
