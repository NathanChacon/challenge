import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDialogComponent } from './main-dialog.component';
import {MatDialogModule,MatButtonModule} from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [MainDialogComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [
    MainDialogComponent
  ],
  exports:[MainDialogComponent]
})
export class MainDialogModule { }
