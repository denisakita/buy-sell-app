import {Component} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'buy-sell-app';
  email: string = '';
  password: string = '';

  constructor(
    public auth: AngularFireAuth,
  ) {
  }

  signIn(email: string, password: string): void {
    this.auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Signed in user:', user);
      })
      .catch((error) => {
        console.error('Sign in error:', error);
      });
  }

  signOut(): void {
    this.auth.signOut();
  }
}
