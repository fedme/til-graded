export class Monster {

    id: string;
    img: string;
    isTheBest: boolean;
    guesses: string[];
    positions: string[];
  
    constructor(id: string = "default", isTheBest: boolean, guesses: string[]) {
      this.id = id;
      this.isTheBest = isTheBest;
      this.guesses = guesses;
      this.positions = [];
    }
  
    public getImgSrc() {
      return "assets/img/" + this.id + ".png";
    }

    public getGuessSrc(guessId: number) {
        return "assets/img/" + this.guesses[guessId] + ".png";
    }
  
    public equals(obj: Monster): boolean {
      return this.id === obj.id;
    }
  
    public toString() {
      return this.id + "[best: " + this.isTheBest + "]";
    }

    public isBestMonster() {
        return this.isTheBest;
    }

    addPositionRecord(pos: string) : void {
      this.positions.push(pos);
    }
  
  }
  