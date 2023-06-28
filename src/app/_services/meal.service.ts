import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { MealModel } from "../_models/meal-model";
import { Observable } from "rxjs";
import { ApiEndpoints } from "../_models/api-endpoints";
import { AvailableMealModel } from "../_models/available-meal-model";

const API_URL = environment.apiUrl;

@Injectable ({
  providedIn: 'root'
})
export class MealService {

  constructor ( private http: HttpClient ) {
  }

  public addMeal ( mealModel: MealModel ): Observable<MealModel> {
    return this.http.post<MealModel> (
      `${ API_URL }${ ApiEndpoints.MEAL_CREATE }`,
      mealModel
    );
  }

  public activateMeal ( mealId: number ): Observable<MealModel> {
    return this.http.put<MealModel> (
      `${ API_URL }${ ApiEndpoints.MEAL_ACTIVATE }/${ mealId }`,
      null
    );
  }

  public deactivateMeal ( mealId: number ): Observable<MealModel> {
    return this.http.delete<MealModel> (
      `${ API_URL }${ ApiEndpoints.MEAL_ACTIVATE }/${ mealId }`
    );
  }

  public lockMeal ( mealId: number ): Observable<MealModel> {
    return this.http.put<MealModel> (
      `${ API_URL }${ ApiEndpoints.MEAL_LOCK }/${ mealId }`,
      null
    );
  }

  public unlockMeal ( mealId: number ): Observable<MealModel> {
    return this.http.delete<MealModel> (
      `${ API_URL }${ ApiEndpoints.MEAL_LOCK }/${ mealId }`
    );
  }

  public readyMeal ( mealId: number ): Observable<MealModel> {
    return this.http.put<MealModel> (
      `${ API_URL }${ ApiEndpoints.MEAL_READY }/${ mealId }`,
      null
    );
  }

  public unreadyMeal ( mealId: number ): Observable<MealModel> {
    return this.http.delete<MealModel> (
      `${ API_URL }${ ApiEndpoints.MEAL_READY }/${ mealId }`
    );
  }

  public prepareMealListForUser (): Observable<MealModel[]> {
    return this.http.get<MealModel[]> (
      `${ API_URL }${ ApiEndpoints.MEAL_FOR_USERS }`
    );
  }

  public getAllMeals ( todayOnwards: boolean = true ): Observable<MealModel[]> {
    return this.http.get<MealModel[]> (
      `${ API_URL }${ ApiEndpoints.MEALS }/${ todayOnwards }`
    );
  }

  public getAllAvailableMealsForToday (): Observable<AvailableMealModel[]> {
    return this.http.get<AvailableMealModel[]> (
      `${ API_URL }${ ApiEndpoints.MEAL_AVAILABLE }`
    );
  }

  public getAllAvailableMealsCount ( mealId: number ): Observable<number> {
    return this.http.get<number> (
      `${ API_URL }${ ApiEndpoints.MEAL_COUNT }/${ mealId }`
    );
  }

}
