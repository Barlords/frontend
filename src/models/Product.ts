export default class Product {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _description: string;
  private readonly _price: number;

  constructor({
    id,
    name,
    description,
    price,
  }: {
    id: number;
    name: string;
    description: string;
    price: number;
  }) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._price = price;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get price(): number {
    return this._price;
  }
}
