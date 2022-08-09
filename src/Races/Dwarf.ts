import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static instanceCount = 0 ;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.newInstance();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static newInstance(): void {
    Dwarf.instanceCount += 1;
  }

  static createdRacesInstance(): number {
    return Dwarf.instanceCount;
  }
}

export default Dwarf;