import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  { path: '', redirectTo: '/menu/main', pathMatch: 'full' },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'main',
        loadChildren: () =>
          import('../../pages/main/main.module').then((m) => m.MainPageModule),
      },
      {
        path: 'ionic',
        loadChildren: () =>
          import('../../pages/ionic/ionic.module').then(
            (m) => m.IonicPageModule
          ),
      },
      {
        path: 'flutter',
        loadChildren: () =>
          import('../../pages/flutter/flutter.module').then(
            (m) => m.FlutterPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
