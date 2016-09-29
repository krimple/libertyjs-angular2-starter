import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bs-column',
  templateUrl: './bs-column.component.html',
  styleUrls: ['./bs-column.component.css']
})
export class BsColumnComponent {
  @Input() private colSmallSize: number = 12;
  @Input() private colMediumSize: number = 6;
  @Input() private colLargeSize: number = 4;

  private bootstrapClassNames: Array<string>;

  constructor() {
    this.bootstrapClassNames = [
      'col-xs' + this.colSmallSize,
      'col-md-' + this.colMediumSize,
      'col-lg-' + this.colLargeSize
    ];

  }

  // ngAfterViewInit() {
  //   let templateDiv: any = this.renderer.selectRootElement('.templateDiv');
  //   this.renderer.setElementClass(
  //     templateDiv, 'col-xs-' + this.colSmallSize.toString(), true);
  //   this.renderer.setElementClass(
  //     templateDiv, 'col-md-' + this.colMediumSize.toString(), true);
  //   this.renderer.setElementClass(
  //     templateDiv, 'col-lg-' + this.colLargeSize.toString(), true);
  // }

}
