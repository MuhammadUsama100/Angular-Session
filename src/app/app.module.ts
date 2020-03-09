import { FirstService } from "./first.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstComponent } from "./first/first.component";
import { ArrayService } from "./array.service";

@NgModule({
  declarations: [AppComponent, FirstComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ArrayService, FirstService],
  bootstrap: [AppComponent]
})
export class AppModule {}
