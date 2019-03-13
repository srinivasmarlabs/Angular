import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  message: string;
  today: Date;
  obj;
  cost: number;
  text: string;

  constructor() { }

  ngOnInit() {
    this.message = 'hEllO woRlD';
    this.today = new Date();
    this.obj = {
      country: 'India',
      capital: 'New Delhi'
    };
    this.cost = 25.3;
    this.text = '';
  }

}
