import { NgModule } from '@angular/core';
import { BsCardComponent } from './bs-card/bs-card.component';
import { BsColumnComponent } from './bs-column/bs-column.component';

@NgModule({
  declarations: [
    BsCardComponent,
    BsColumnComponent
  ],
  exports: [
    BsCardComponent,
    BsColumnComponent
  ]
})
export class BootstrapModule { }

