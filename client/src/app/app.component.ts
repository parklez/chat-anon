import { Component, OnInit } from '@angular/core';
import { Message } from './models/message'
import { ChatService } from './services/chat.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  messages: Message[] = []

  constructor(public chat: ChatService) { }

  ngOnInit(): void {
    this.chat.getHistory().subscribe({
      next: (result) => {
        this.messages.push(...result);
      }
    })

    this.chat.getMessages().subscribe({
      next: (result) => {
        this.messages.push(result);
        scrollTo(0, document.body.scrollHeight);
      },
      error: (e) => {
        console.log(e)
      }
    })
  }
}
