import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class ChatService {

  constructor(private socket: Socket) { }

  // https://www.digitalocean.com/community/tutorials/angular-socket-io#step-1-setting-up-the-project-directory-and-creating-the-socket-server
  // https://codingblast.com/chat-application-angular-socket-io/

  public getHistory() {
    this.socket.emit('history');
    return new Observable<Message[]>((observer) => {
      this.socket.on('history', (message: Message[]) => {
        observer.next(message);
      });
    });
  }

  public getMessages() {
    return new Observable<Message>((observer) => {
      this.socket.on('new-message', (message: Message) => {
        observer.next(message);
      });
    });
  }

  public postMessage(message: Message) {
    this.socket.emit('new-message', message);
  }
}
