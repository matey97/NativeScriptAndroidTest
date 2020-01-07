import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page'
import { SqliteService } from '../sqlite/sqlite.service';
import { Coordinates } from '../model/Coordinates';
import { LocationService } from '../location-service/location.service';

@Component({
  selector: 'ns-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number;
  coords: Array<Coordinates>;

  constructor(private page : Page, 
    private database : SqliteService, 
    private location: LocationService) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.database.registerMe(this);
    this.coords = new Array();
    this.updateCounter();
  }

  updateCounter(){
    this.database.getDBConnection().then(
      db => {
        this.database.getCoords(db).then(res => {
          console.log(res);
          this.coords = new Array()
          if (res !== null){
            this.count = res.length;
            res.forEach(element => {
              this.coords.push(new Coordinates(element[1], element[2], element[3], element[4]));
            });
          } else {
            this.count = 0;
          }
        });
      }
    )
  }

  onResetClicked(){
    this.database.getDBConnection().then(
      db => {
        this.database.deleteData(db).then(
          () => {
            this.count = 0;
            this.coords = new Array();
          }
          ,
          error => console.log("Could not delete coords")
        );
      });
  }

  //For testing purposes
  onAddNew(){
    this.location.saveCurrentLocation();
  }

}
