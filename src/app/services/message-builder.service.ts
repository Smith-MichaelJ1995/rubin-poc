import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageBuilderService {

  message: string;

  constructor() { }

  setMessage(message: string) {
    console.log("message = " + message)
    this.message = message;
  }

  getMessage(): string {
    return this.message
  }

}
