import { Injectable } from '@angular/core';
import { Coordinates } from '../model/Coordinates';
import { CounterComponent } from '../counter/counter.component';
var sqlite = require("nativescript-sqlite");

@Injectable({
  providedIn: 'root'
})
export class SqliteService {

  observers: Array<CounterComponent>;

  constructor() { 
    this.observers = new Array<CounterComponent>();
  }

  public registerMe(observer) {
    this.observers = this.observers.concat(observer);
    console.log("Registered");
  }

  public getDBConnection() {
    return new sqlite('coordinates');
  }

  public closeDBConnection(db) {
    db.close();
  }

  public createDatabase(db) {
    return db.execSQL("CREATE TABLE IF NOT EXISTS coords \
          (id INTEGER PRIMARY KEY AUTOINCREMENT, latitude NUMERIC, \
          longitude NUMERIC, accuracy NUMERIC, timestamp NUMERIC)");
  }

  public getCoordsCount(db) {
    return db.get("SELECT COUNT(*) FROM coords");
  }

  public insertData(db, coords: Coordinates) {
    return db.execSQL("INSERT INTO coords(latitude, longitude, accuracy, timestamp)  values (?, ?, ?, ?)",
      [coords.latitude, coords.longitude, coords.accuracy, coords.timestamp]).then(
        () => this.notifyObservers(),
        error => console.log("INSERT error")
      );
  }

  public notifyObservers() {
    console.log("Observers to notify -->",this.observers.length);
    this.observers.forEach(observer => observer.updateCounter())
  }

  public deleteData(db) {
    return db.execSQL("DELETE FROM coords");
  }
}
