export class Coordinates{
    latitude: number;
    longitude: number;
    accuracy: number;
    timestamp: number;

    constructor(latitude, longitude, accuracy, timestamp) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.accuracy = accuracy;
        this.timestamp = timestamp;
    }
}