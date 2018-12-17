import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },

  {
    path: 'welcome',
    loadChildren: '~/app/welcome/welcome.module#WelcomeModule'
  },

  {
    path: 'tabs',
    loadChildren: '~/app/tabs/tabs.module#TabsModule'
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
