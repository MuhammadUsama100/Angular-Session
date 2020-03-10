import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { auth } from "./authObject/auth";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FirstService {
  private url: string = "/assets/data/data.json";
  constructor(private http: HttpClient) {}
  getArrayElements(): Observable<auth[]> {
    return this.http.get<auth[]>(this.url);
  }
}
