import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path:'',
    component:IndexPage,
    children:[
      {
        path:'configuracion',
        loadChildren: () => import('../index/tabs/conf/user-configuration.module').then(m => m.UserConfigurationPageModule)
      },
      {
        path:'inicio',
        loadChildren: () => import('../index/tabs/inicio/inicio.module').then(m => m.InicioPageModule)
      }
    ]
  },
  {
    path:'',
    redirectTo:'/index/inicio',
    pathMatch:'full'
  }

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
