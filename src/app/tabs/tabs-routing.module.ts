import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent
} from 'nativescript-angular';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: 'default',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        component: NSEmptyOutletComponent,
        loadChildren: '~/app/home/home.module#HomeModule',
        outlet: 'homeTab'
      },
      {
        path: 'browse',
        component: NSEmptyOutletComponent,
        loadChildren: '~/app/browse/browse.module#BrowseModule',
        outlet: 'browseTab'
      },
      {
        path: 'search',
        component: NSEmptyOutletComponent,
        loadChildren: '~/app/search/search.module#SearchModule',
        outlet: 'searchTab'
      }
    ]
  }
];

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  exports: [NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TabsRoutingModule {}
