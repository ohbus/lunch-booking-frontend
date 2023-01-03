export class BookingModel {
  constructor(
    public id: number = 0,
    public firstName: string = "",
    public lastName: string = "",
    public date: string = "",
    public mealOption: string = "",
    public mealOptionId: number = 0,
    public availedAt: number = 0
  ) {
  }
}
