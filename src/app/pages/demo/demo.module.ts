import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { LoginComponent } from './login/login.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DemoComponent, LoginComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
  ],
})
export class DemoModule {}
