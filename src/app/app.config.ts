import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({
      "projectId": "gallery-app-2feda",
      "appId": "1:24049218119:web:719938e7aa0f9371383762",
      "storageBucket": "gallery-app-2feda.appspot.com", "apiKey":
        "AIzaSyB5qH9QTu3RPivY2mfrfrCZnT_05O6tNls", "authDomain":
        "gallery-app-2feda.firebaseapp.com", "messagingSenderId": "24049218119"
    })),
    provideAuth(() => getAuth())]

};
