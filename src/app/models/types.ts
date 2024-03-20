export class Listing {
  constructor(
    public id: number = 0,
    public name: string = '',
    public description: string = '',
    public price: number = 0,
    public views: number = 0,
    public user_id: number = 0,
  ) {
  }
}
