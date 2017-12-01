import { Idle } from '@ng-idle/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(idleService: Idle) {
    idleService.setIdle(10);
    idleService.setTimeout(10);
    idleService.onTimeout.subscribe(() => {
      this.title = 'timing out!';
    });
    idleService.watch();
  }

  public changeTitle() {
    this.title = 'title changed!';
  }
}
