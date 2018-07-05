import { InjectionToken } from '@angular/core';

export let JQ_TOKEN = new InjectionToken<Object>('jQuery')

export interface Toastr {

  success(message:string, title?:string): void;
  info(message:string, title?:string): void;
  warning(message:string, title?:string): void;
  error(message:string, title?:string): void;

}