import {Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {MainComponent} from "./main/main.component";
import {authGuard} from "./auth.guard";

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  }
  ,
  {
    path: "",
    component: MainComponent,
    canActivate: [authGuard],

  }

];
