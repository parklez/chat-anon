import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

import { ChatService } from '../services/chat.service';
import { ProfilePicService } from '../services/profile-pic.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  avatar = 'https://bulma.io/images/placeholders/128x128.png';
  loadingAvatar = false;

  loginForm = new UntypedFormGroup({
    //"avatar": new UntypedFormControl(null, Validators.required),
    user: new UntypedFormControl(null, Validators.required),
    text: new UntypedFormControl(null, Validators.required),
  });

  constructor(public chat: ChatService, public profile: ProfilePicService) {}

  ngOnInit(): void {
    this.getRandomAvatar();
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
    const values = this.loginForm.value;
    this.chat.postMessage({ avatar: this.avatar, ...values });
    this.loginForm.setValue({ text: '', user: values.user });
  }

  openAvatarInput() {
    const url = prompt('URL para sua imagem.png');
    if (url) {
      this.avatar = url;
    }
  }

  getRandomAvatar() {
    this.loadingAvatar = true;
    this.profile.getRandomPic().subscribe({
      next: (response) => {
        this.avatar = response.url
      },
      error: () => {
        this.loadingAvatar = false;
      }
    })
  }
}
