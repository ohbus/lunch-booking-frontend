export class AvailableMealModel {

  constructor(
    public id: number = 0,
    public date: string = "1970-01-01",
    public mealOptionId: number = 0,
    public mealOptionName: string = "",
    public count: number = 0
  ) {
  }
}
