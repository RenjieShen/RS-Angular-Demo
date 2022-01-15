import { Guid } from "guid-typescript";

export class Car {
  id: string = Guid.create().toString();
  model: string;
  color: string;
  sold: boolean;
  constructor(model?: string, color?: string) {
    this.model = model ?  model : '';
    this.color = color ?  color : '';
    this.sold = false;
  }
}
