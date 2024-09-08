import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { AccountService } from './service/account.service';
import { LoginComponent } from "./components/account/login/login.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, LoginComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  title = 'AuthenticationSystem';

  service = inject(AccountService);

  ngOnInit() {
    this.service.userCookie();
    console.log("Checking cookie for the first time in app component", this.service.userCookie());
  }
}
