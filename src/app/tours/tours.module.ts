import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToursComponent} from "./tours.component";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [ToursComponent],
    declarations: [ToursComponent]
})
export class ToursModule {
}
