import { StarComponent } from './star/star.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [StarComponent],
  imports: [
    CommonModule
  ],
  exports: [StarComponent, CommonModule]
})
export class SharedModule { }
