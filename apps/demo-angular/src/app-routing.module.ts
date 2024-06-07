import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'nativescript-highcharts',
    loadChildren: () =>
      import('./plugin-demos/nativescript-highcharts.module').then((m) => m.NativescriptHighchartsModule),
  },
  {
    path: 'nativescript-ox-button',
    loadChildren: () =>
      import('./plugin-demos/nativescript-ox-button.module').then((m) => m.NativescriptOxButtonModule),
  },
  {
    path: 'nativescript-toast',
    loadChildren: () => import('./plugin-demos/nativescript-toast.module').then((m) => m.NativescriptToastModule),
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
