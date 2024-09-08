import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/user/login';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs';
import { Register } from '../model/user/register';
import { Cookie } from '../model/cookie';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  userCookie = signal<Cookie | null>(null);

  url = environment.baseUrlHttps;

  private http = inject(HttpClient);

  private cookies = inject(CookieService);

  loginUser(data: any) {
    return this.http.post<Cookie>(this.url + 'api/account/login', data).pipe(
      tap((response) => {
        // this.cookies.set('cookieData', JSON.stringify(response));
        localStorage.setItem("user", JSON.stringify(response));

        if (response) {
          console.log('This is the response', response);
          this.userCookie.set(response);

        }
      })
    );
  }

  registerUser(data: any) {
    return this.http.post<Register>(this.url + 'api/account/register', data);
  }


  logoutUser(){
  //  this.cookies.delete('cookieData');
   localStorage.removeItem("user");
   this.userCookie.set(null);
  }

}
