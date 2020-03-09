import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FirstService {
  constructor() {}
  getArrayElements() {
    var abc = ["a", "b", "c", "d"];
    return abc;
  }
}
