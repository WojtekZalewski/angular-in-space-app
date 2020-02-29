import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickizePipe } from './tickize.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TickizePipe],
  exports: [TickizePipe]
})
export class SharedModule { }
