import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmailContact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = 'http://localhost:9000/api/contact';

  constructor(private http: HttpClient) { }

  sendContactMail(email: EmailContact): Observable<EmailContact> {
    return this.http.post<EmailContact>(`${this.baseUrl}` + `/sendcontactmail`, email);
  }

  sendDevisMail(email: EmailContact): Observable<EmailContact> {
    return this.http.post<EmailContact>(`${this.baseUrl}` + `/senddevismail`, email);
  }
}
