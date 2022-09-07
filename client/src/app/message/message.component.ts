import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input('avatar') avatar = 'https://bulma.io/images/placeholders/128x128.png'; 
  @Input('user') user = ''; 
  @Input('text') text = ''; 

  constructor() { }

  ngOnInit(): void {
  }

}
