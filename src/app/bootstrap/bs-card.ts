import {Component} from '@angular/core';

@Component({
    selector: 'bs-card',
    styles: [
        'div.card { margin: 10px;}'
    ],
    template: `
<div class="card">
  <div class="card-block">
    <h4 class="card-title"><ng-content select=".card-title"></ng-content></h4>
    <div class="card-text">
      <ng-content select=".card-body"></ng-content>
    </div>
  </div>
</div>
    `
})
export class BsCard {

}