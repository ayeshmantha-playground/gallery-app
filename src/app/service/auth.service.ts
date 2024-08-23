import {Injectable} from '@angular/core';
import {
  Auth,
  authState,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User
} from "@angular/fire/auth";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User | null = null;


  constructor(private auth: Auth, routerService: Router) {

    authState(auth).subscribe((user: User | null) => {
      this.user = user;
      if (user) {
        routerService.navigateByUrl("/");
      } else {
        routerService.navigateByUrl("/sign-in");
      }
    });

  }

  getPrinciple(): User | null {
    return this.user;

  }

  signInWithGoogle() {
    signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  signOut() {
    signOut(this.auth);
  }

  signInWithFaceBook() {
    signInWithPopup(this.auth, new FacebookAuthProvider());
    //todo:connect the fb account with firebase
  }

  signInWithInstagram() {
    //Todo:authenticate via Instagram
  }

}
