import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScanRoutingModule } from './scan-routing.module';
import { ScanComponent } from './scan.component';


@NgModule({
  declarations: [
    ScanComponent
  ],
  imports: [
    CommonModule,
    ScanRoutingModule
  ]
})
export class ScanModule {
}
