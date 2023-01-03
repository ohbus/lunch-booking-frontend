import { MealOptionsModel } from "./meal-options-model";

export class MealModel {
  constructor(
    public id: number = 0,
    public name: string = "",
    public date: string = "1970-01-01",
    public activatedAt: number = 0,
    public lockedAt: number = 0,
    public readyAt: number = 0,
    public mealOptions: MealOptionsModel[] = new Array<MealOptionsModel>()) {
  }
}
