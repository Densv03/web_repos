import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgmCoreModule } from "@agm/core";
import { AGM_API } from "./core/constants/agm-api";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from './core/pipes/filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        FilterPipe
    ],
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: AGM_API
        }),
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
