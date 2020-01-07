import { LocationService } from "./location-service/location.service";
import { Alarm } from "./alarm.android"

@JavaProxy("org.nativescript.NativeScriptAndroidBackground.AlarmReceiver")
export class AlarmReceiver extends android.content.BroadcastReceiver {

    constructor(private locationService: LocationService) {
        super();
        return global.__native(this);
    }

    public onReceive(
        context: android.content.Context,
        intent: android.content.Intent) {
        console.log("onReceive called!");
        const alarm = new Alarm();
        alarm.reschedule();
        this.locationService.saveCurrentLocation();
    }
}