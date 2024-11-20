import { Conferencia } from "./Conferencia";

export class ConferenciaDetail extends Conferencia {
    venue: String;
    description: String;
   
    constructor(
      id: number,
      name: string,
      starting: Date,
      ending: Date,
      venue: String,
      description: String

    ) {
      super(id,name,starting,ending);
      this.venue = venue;
      this.description = description;
    }
}
