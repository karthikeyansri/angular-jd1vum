import { HostListener } from '@angular/core';

export abstract class ComponentCanDeactivate {
  abstract canDeactivate(): boolean;

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: Event) {
    $event.preventDefault();
    console.log($event);
    setTimeout(() => {
      console.log($event);
      if (!this.canDeactivate()) {
        $event.returnValue = true;
      }
    }, 3000);
  }
}
