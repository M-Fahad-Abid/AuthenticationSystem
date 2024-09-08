import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../app.routes';
import { AccountService } from '../../../service/account.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Login } from '../../../model/user/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private route = inject(Router);

  private service = inject(AccountService);

  loginData: Login = {
    email: '',
    password: '',
  };

  registerButton() {
    this.route.navigate(['/user-register']);
  }

  login() {
    this.service.loginUser(this.loginData).subscribe({
      next: (response) => {
        console.log("That's the response", response);
        this.route.navigate(["/home"]);

      },
      error: (error) => console.log('I got the error', error),
      complete: () => console.log('request completed!'),
    });
  }
}
