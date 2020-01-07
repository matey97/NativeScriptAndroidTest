import { AlarmReceiver } from './alarm-receiver.android'
import { android as androidApp} from 'tns-core-modules/application/application';

const interval = 20 * 1000;
export class Alarm {
    alarmManager: android.app.AlarmManager;
    receiverIntent: android.content.Intent;
    pendingIntent: android.app.PendingIntent;

    constructor(){
        this. alarmManager = androidApp.context.getSystemService(android.content.Context.ALARM_SERVICE);
        this.receiverIntent = new android.content.Intent(androidApp.context, AlarmReceiver.class);
    }
    
    public schedule() {
        if (this.isUp()) return;
        this.reschedule();
        console.log("Alarm scheduled!");
    }

    public isUp(): boolean{
        return android.app.PendingIntent.getBroadcast(
            androidApp.context, 0, this.receiverIntent, android.app.PendingIntent.FLAG_NO_CREATE) !== null
    }

    public reschedule(){
        const triggerAtMillis = new Date().getTime() + interval;
        this.alarmManager.setExact(android.app.AlarmManager.RTC_WAKEUP, triggerAtMillis, this.getPendingIntent())
    }

    public getPendingIntent(): android.app.PendingIntent{
        if (this.pendingIntent === null) {
            this.pendingIntent = android.app.PendingIntent.getBroadcast(
                androidApp.context, 0, this.receiverIntent, 0);
        }
        return this.pendingIntent;
    }

}