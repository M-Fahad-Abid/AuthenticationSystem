import { Component, inject } from '@angular/core';
import { AccountService } from '../../../service/account.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
 service = inject(AccountService)
}
