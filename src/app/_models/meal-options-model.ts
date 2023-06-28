export class MealOptionsModel {
  constructor (
    public id: number = 0,
    public name: string = "",
    public selected: boolean = false,
    public count: number = 0
  ) {
  }
}
