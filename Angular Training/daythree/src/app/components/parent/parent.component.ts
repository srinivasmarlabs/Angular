import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  favDish: string;
  favDish4Child: string;
  childFavCountry: string;

  constructor() { }

  ngOnInit() {
    this.favDish = '';
    this.favDish4Child = '';
    this.childFavCountry = '';
  }

  sendFavDish2Child() {
    this.favDish4Child = this.favDish;
  }

  countryEventHandler(event) {
    // console.log(event);
    this.childFavCountry = event;
  }
}
