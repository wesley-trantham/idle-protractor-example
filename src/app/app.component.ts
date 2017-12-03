import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app works!';

  public expectedIdleTime: Date;
  private currentIdleIntervalFrequencyInSeconds = 5;
  private currentTimeoutDurationInSeconds = 10;
  public mostRecentInterrupt: Date;
  public currentTime: Date;
  public expectedTimeout: Date;
  public actualIdle: Date;
  public actualTimeout: Date;

  constructor(private idleService: Idle, zone: NgZone) {
    const now = new Date();
    this.currentTime = now;
    this.setNextWatchIntervals(now);
    this.mostRecentInterrupt = now;

    idleService.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    idleService.setIdle(this.currentIdleIntervalFrequencyInSeconds);
    idleService.setTimeout(this.currentTimeoutDurationInSeconds);
    idleService.onTimeout.subscribe(() => {
      this.title = 'timed out!';
      this.actualTimeout = new Date();
    });
    idleService.onTimeoutWarning.subscribe((x) => {
      this.title = `warning - timeout in ${x}`;
    });
    idleService.onIdleStart.subscribe(() => {
      this.actualIdle = new Date();
    });
    idleService.onInterrupt.subscribe(x => {
      const interruptDate = new Date();
      this.mostRecentInterrupt = interruptDate;
      this.setNextWatchIntervals(interruptDate);
    });
    idleService.onIdleEnd.subscribe(() => {
      this.title = `no longer idle`;
    });

    zone.runOutsideAngular(() => {
      setInterval(() => {
        zone.run(() => {
          this.currentTime = new Date();
        });
      }, 200);
    });

    idleService.watch();
  }

  public changeTitle() {
    this.title = 'Watch started!';
    this.idleService.watch();
    this.setNextWatchIntervals(new Date());
  }

  private setNextWatchIntervals(now: Date) {
    this.expectedIdleTime = new Date(now.getTime() + this.currentIdleIntervalFrequencyInSeconds * 1000);
    this.expectedTimeout = new Date(this.expectedIdleTime.getTime() + this.currentTimeoutDurationInSeconds * 1000);
  }
}
