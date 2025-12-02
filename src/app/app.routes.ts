import { Home } from '../app/app/pages/home/home';
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { NintendoComponent } from './pages/nintendo/nintendo';
import { Playstation } from './pages/playstation/playstation';
import { Smartphone } from './pages/smartphone/smartphone';
import { Accesorios } from './pages/accesorios/accesorios';
import { Xbox } from './pages/xbox/xbox';
import { Contact } from './contact/contact';


export const routes: Routes = [
  // Redirección al iniciar la app
  { path: '', redirectTo: 'Home', pathMatch: 'full' },

  { path: 'Home', component: Home },
  { path: 'nintendo', component: NintendoComponent },
  { path: 'playstation', component: Playstation },
  { path: 'Smartphone', component: Smartphone },
  { path: 'xbox', component: Xbox },
  { path: 'contact', component: Contact },
    { path: 'Accesorios', component: Accesorios },
  
  { path: '**', redirectTo: 'Home' }
];
