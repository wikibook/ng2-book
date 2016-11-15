import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  template: `
    <h3>LOGIN</h3> {{message}}
    <p>
      <input type="text" [(ngModel)]="userId" placeholder="사용자 아이디" *ngIf="!authService.isLogin">
      <button (click)="login()"  *ngIf="!authService.isLogin">로그인</button>
      <button (click)="logout()" *ngIf="authService.isLogin">로그아웃</button>
    </p>`
})
export class LoginComponent {
  message: string; userId: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = (this.authService.isLogin ? this.authService.userId + '님 로그인이 되었습니다.' : '로그인을 진행해주세요 (ID는 1부터 5까지 허용)');
  }

  private doLogin() {
    this.setMessage();
    if (this.authService.isLogin) {
      let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
      let navigationExtras: NavigationExtras = {
        preserveQueryParams: true,
        preserveFragment: true
      };
      this.router.navigate([redirect], navigationExtras);
    } else {
      alert('로그인을 할 수 없습니다.');
    }
  }

  login() {
    if (!this.userId) {
      alert('id를 입력해주세요');
      return;
    }
    this.message = '로그인을 진행해주세요';

    return this.authService.checkId(this.userId).then(children => {
      if (children) {
        this.authService.login(this.userId).subscribe(() => this.doLogin());
      } else {
        alert('아이디가 없습니다');
      }
      this.setMessage();
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}