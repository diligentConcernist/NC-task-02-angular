import { NgModule } from "@angular/core";
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AddFormComponent } from "./add-form/add-form.component";
import { AppComponent } from "./app.component";
import { NumberFormat } from "./app.number-format.pipe";

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
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
