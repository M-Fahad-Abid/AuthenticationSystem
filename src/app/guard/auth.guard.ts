import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../service/account.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const toastMessage = inject(ToastrService);
  const accountService = inject(AccountService);
  

  if (accountService.userCookie()) {
    return true;
  } else {
    toastMessage.warning('You are not authorized', 'Not Authorized');
    return false;
  }
};
