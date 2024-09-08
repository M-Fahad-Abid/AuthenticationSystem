import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AccountService } from '../../../service/account.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  service = inject(AccountService);

  private router = inject(Router)

  logout() {
    this.service.logoutUser();
    this.router.navigate(["/user-login"]);
  }
}
