import {NgModule} from '@angular/core';
import {BsColumn} from "./bs-column";
import {BsCard} from "./bs-card";
@NgModule({
    declarations: [
        BsColumn,
        BsCard
    ],
    exports: [
        BsColumn,
        BsCard
    ]
})
export class TwitterBootstrapModule {}

