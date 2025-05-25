import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface PaymentPremiumResponse {
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = environment.apiUrl + '/payment'

  constructor(private http: HttpClient) {}

  suscripcionPremium(token: string) {
    return this.http.post<PaymentPremiumResponse>(`${this.apiUrl}/suscripcionPremium`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}
