import { EmailRequest } from '../entity/EmailRequest';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public sendHelpMailMessage(receiver: string): Observable<any> {
    const url = 'http://localhost:8080/api/home/send-mail';

    return this.http.post<EmailRequest>(url, new EmailRequest(receiver))
      .pipe(
        catchError(error => {
          return of(error);
        })
      );
  }
}
