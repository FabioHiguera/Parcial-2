export class Conferencia {
        id: number;
        name: string;
        starting: Date;
        ending: Date;
       
        constructor(
          id: number,
          name: string,
          starting: Date,
          ending: Date,

        ) {
          this.id = id;
          this.name = name;
          this.starting = starting;
          this.ending = ending;

        }
    }
