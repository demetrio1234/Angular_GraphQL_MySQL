import { CanActivateChildFn } from '@angular/router';

export const cGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
