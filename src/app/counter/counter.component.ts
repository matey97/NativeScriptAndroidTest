import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page'

@Component({
  selector: 'ns-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number;

  constructor(private page : Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.count = 2;
  }

  onResetClicked(){
    this.count = 0;
  }

}
