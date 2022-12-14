import { HostListener } from '@angular/core';

export abstract class ComponentCanDeactivate {
  abstract canDeactivate(): boolean;

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: Event) {
    $event.preventDefault();
    console.log('1', $event);

    if (!this.canDeactivate()) {
      $event.returnValue = true;
    }
    console.log('2', $event);
  }
}
