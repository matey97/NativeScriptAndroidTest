import { Injectable } from '@angular/core';

import { android as androidApp } from "tns-core-modules/application";
import { SqliteService } from '../sqlite/sqlite.service';
import { Coordinates } from '../model/Coordinates';
import * as permissions from 'nativescript-permissions';

const gms = com.google.android.gms;
const LocationServices = gms.location.LocationServices;
const OnSuccessListener = gms.tasks.OnSuccessListener;
const OnFailureListener = gms.tasks.OnFailureListener;
const PERMISSION_NAME = android.Manifest.permission.ACCESS_FINE_LOCATION;

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private sqlite: SqliteService) {
  }

  saveCurrentLocation() {
    if (androidApp) {
      console.log("saveCurrentLocation called!");
      if (permissions.hasPermission(PERMISSION_NAME)){
        this.getAndSaveLocation();
      } else {
        permissions.requestPermission(PERMISSION_NAME, "Necesitamos acceder a tu ubicación para fines nada sospechosos :)")
          .then(() => this.getAndSaveLocation()).catch(() => console.log("No hay permisos :("));
      } 
    }
  }

  private getAndSaveLocation(){
    const that = this;
    const locationProvider = LocationServices.getFusedLocationProviderClient(androidApp.context);
    locationProvider.getLastLocation().addOnSuccessListener(
      new OnSuccessListener({
        onSuccess: function(location: android.location.Location) {
          const currentLocation = new Coordinates(
            location.getLatitude(),
            location.getLongitude(),
            location.getAccuracy(),
            location.getTime()
          );
          that.sqlite.getDBConnection().then(db => {
            that.sqlite.insertData(db, currentLocation);
          });
        }
      })
    ).addOnFailureListener(
      new OnFailureListener({
        onFailure: function(e: java.lang.Exception) {
          console.log(e.getMessage());
        }
      })
    )
  }
}
