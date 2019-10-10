import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import Greetings from "../../../../domain/src/lib/models/greetings.interface";

@Injectable({
  providedIn: 'root'
})
export class GreetingsService {

  private apiUrl = 'http://localhost:3333/api';

  constructor(private httpClient: HttpClient) {
  }

  public getGreettings$(): Observable<Greetings> {
    return this.httpClient.get<Greetings>(this.apiUrl);
  }
}
