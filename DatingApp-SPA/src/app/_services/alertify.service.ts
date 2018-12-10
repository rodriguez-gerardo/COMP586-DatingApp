import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

// Callback function for soething to occur after user clicks ok. e is clickevent
confirm(message: string, okCallback: () => any) {
  alertify.confirm(message, function(e) {
    if (e) {
      okCallback();
    } else {}
  });
}
// wrappers for alertify to display message
success(message: string) {
  alertify.success(message);
}

error(message: string) {
  alertify.error(message);
}

warning(message: string) {
  alertify.warning(message);
}

message(message: string) {
  alertify.message(message);
}
}
