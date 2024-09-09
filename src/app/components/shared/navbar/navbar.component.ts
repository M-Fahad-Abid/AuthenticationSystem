import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AccountService } from '../../../service/account.service';
import { ToastrService } from 'ngx-toastr';

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

  private toastMessage = inject(ToastrService);

  logout() {
    this.service.logoutUser();
    this.toastMessage.info("see you again","Bye");
    this.router.navigate(["/user-login"]);
  }
}
