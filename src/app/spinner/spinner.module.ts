import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatProgressSpinnerModule} from '@angular/material'
@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatProgressSpinnerModule
  ],
  exports:[SpinnerComponent]
})
export class SpinnerModule { }
