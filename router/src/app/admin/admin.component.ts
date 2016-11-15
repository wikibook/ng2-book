import { Component } from '@angular/core';
import { AuthService }      from '../auth.service';

@Component({
  selector: 'admin',
  template: `
    <h3>운영자 페이지</h3>
    <div *ngIf="isLogin">{{userId}}님 반갑습니다.</div>
    <div *ngIf="!isLogin">로그인을 진행해주세요.</div> 
  `
})
export class AdminComponent {
  isLogin:boolean;
  userId: string;
  constructor(public authService: AuthService){
      
  }
  ngOnInit(){
    this.isLogin=this.authService.isLogin;
    this.userId=this.authService.userId;
  }
}