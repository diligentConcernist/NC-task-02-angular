import { NgModule } from "@angular/core";
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AddFormComponent } from "./add-form/add-form.component";
import { AppComponent } from "./app.component";
import { HandOverDirective } from "./app.hand-over.directive";
import { NameFormat } from "./app.name-format.pipe";
import { NumberFormat } from "./app.number-format.pipe";

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    HandOverDirective,
    NameFormat,
    NumberFormat,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
