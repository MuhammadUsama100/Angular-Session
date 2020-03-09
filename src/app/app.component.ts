import { FirstService } from "./first.service";
import { Component } from "@angular/core";
import { ArrayService } from "./array.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  abcbool = true;

  title: string = "usman";
  array;
  constructor(service: FirstService) {
    //let arrayObject = new ArrayService();
    this.array = service.getArrayElements();
  }
}
