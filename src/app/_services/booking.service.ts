import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment.prod";
import { Observable } from "rxjs";
import { CreateBookingResponseModel } from "../_models/create-booking-response-model";
import { ApiEndpoints } from "../_models/api-endpoints";
import { BookingModel } from "../_models/booking-model";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) {
  }

  public createBooking(mealOptionId: number): Observable<CreateBookingResponseModel> {
    return this.http.post<CreateBookingResponseModel>(
      `${API_URL}${ApiEndpoints.BOOKING_CREATE}/${mealOptionId}`,
      null
    );
  }

  public availBooking(bookingId: number): Observable<BookingModel> {
    return this.http.put<BookingModel>(
      `${API_URL}${ApiEndpoints.BOOKING_AVAIL}/${bookingId}`,
      null
    );
  }

  public cancelBookingById(bookingId: number): Observable<void> {
    return this.http.delete<void>(
      `${API_URL}${ApiEndpoints.BOOKING_ID}/${bookingId}`
    );
  }

  public getCurrentBooking(): Observable<BookingModel> {
    return this.http.get<BookingModel>(
      `${API_URL}${ApiEndpoints.BOOKING_FOR_TODAY}`
    );
  }

  public getUserBookings(getPrevious: boolean = false): Observable<BookingModel[]> {
    if (getPrevious) {
      return this.http.get<BookingModel[]>(
        `${API_URL}${ApiEndpoints.BOOKING_FETCH_FOR_USER}`, {
          params: new HttpParams().set(
            `prev`,
            getPrevious
          )
        }
      );
    } else {
      return this.http.get<BookingModel[]>(
        `${API_URL}${ApiEndpoints.BOOKING_FETCH_FOR_USER}`
      );
    }
  }

  public getAllBookingsForDate(date: string): Observable<BookingModel[]> {
    return this.http.get<BookingModel[]>(
      `${API_URL}${ApiEndpoints.BOOKINGS_BY_DATE}/${date}`
    );
  }

  public createBookingFromAvailableOptions(mealOptionId: number): Observable<BookingModel> {
    return this.http.put<BookingModel>(
      `${API_URL}${ApiEndpoints.BOOKING_PICK_UP}/${mealOptionId}`,
      null
    );
  }
}
