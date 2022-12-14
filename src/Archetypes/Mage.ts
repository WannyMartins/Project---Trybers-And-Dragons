import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  _energyType: EnergyType;
  private static instanceCount = 0;

  constructor(name: string) {
    super(name);
    Mage.instanceCount += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return this.instanceCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;