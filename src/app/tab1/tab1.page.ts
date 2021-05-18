import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}
  ngOnInit()
  {
    console.log("Hola mundo");
    let n1 = 5;
    let n2 = 10;
    let total = n1 + n2;
    console.log(total);
  }
}
