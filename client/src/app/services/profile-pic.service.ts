import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilePicService {

  base = 'https://api.waifu.pics'

  constructor(private http: HttpClient) { }

  getRandomPic(): Observable<{url: string}> {
    return this.http.get<{url: string}>(this.base + '/sfw/waifu')
  }
}
