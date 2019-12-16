import { Component } from "@angular/core";
import { SqliteService } from "./sqlite/sqlite.service";
import { Coordinates } from "./model/Coordinates";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent { 

    constructor(private database : SqliteService){
        this.database.getDBConnection().then(
            db => {
                this.database.createDatabase(db).then(
                    () => console.log("Database created, or not :)"),
                    error => console.log("Database not created :(")
                )
            }
        );
    }

}
