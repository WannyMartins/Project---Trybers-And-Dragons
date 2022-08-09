import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  // protected _createdRacesInstance: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    // this._createdRacesInstance += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  // get createdRacesInstance(): number {
  //   return this._createdRacesInstances += 1
  // }
}

export default Dwarf;