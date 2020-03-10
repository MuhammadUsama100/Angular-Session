import { FirstService } from "./first.service";
import { Component } from "@angular/core";
import { AuthComponentComponent } from "./auth-component/auth-component.component";
import { auth } from "./authObject/auth";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  abcbool = true;
  public auth = [];

  title: string = "usman";
  array;
  constructor(private service: FirstService) {}
  ngOnInit() {
    this.service.getArrayElements().subscribe(data => (this.auth = data));
  }
}
