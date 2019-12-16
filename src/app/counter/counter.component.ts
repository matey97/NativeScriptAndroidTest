import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page'
import { SqliteService } from '../sqlite/sqlite.service';
import { Coordinates } from '../model/Coordinates';

@Component({
  selector: 'ns-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number;

  constructor(private page : Page, private database : SqliteService) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.database.registerMe(this);
    this.updateCounter();
  }

  updateCounter(){
    this.database.getDBConnection().then(
      db => {
        this.database.getCoordsCount(db).then(res => {
          this.count = res;
        });
      }
    )
  }

  onResetClicked(){
    this.database.getDBConnection().then(
      db => {
        this.database.deleteData(db).then(
          () => this.count = 0,
          error => console.log("Could not delete coords")
        );
      });
  }

  onAddNew(){
    this.database.getDBConnection().then(
      db => {
        this.database.insertData(db, new Coordinates(0, 0, 0, 0));
      }
    )
  }

}
