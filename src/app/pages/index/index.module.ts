import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';
import { UserConfigurationPageRoutingModule } from './tabs/conf/user-configuration-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule,
    UserConfigurationPageRoutingModule,
  ],
  declarations: [IndexPage]
})
export class IndexPageModule {}
