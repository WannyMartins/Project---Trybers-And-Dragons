import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  _char2: Fighter;
  constructor(char1: Fighter, char2: Fighter) {
    super(char1);
    this._char2 = char2;
  }

  fight(): number {
    while (!(this.player.lifePoints === -1 
      || this._char2.lifePoints === -1)) {
      this._char2.attack(this.player);
      this.player.attack(this._char2);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
