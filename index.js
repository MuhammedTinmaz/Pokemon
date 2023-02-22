//------------------------------------------------------POKEMON
class Pokemon {
    constructor(name, kp, mp) {
        this.name = name;
        this.kp = kp;
        this.mp = mp;
        this.attack = [];
    }
    showStatus() {
        let allAttacks = [];
        if (this.attack.length === 0) {
            return this.attack.push(
                `${this.name} Die..ses...Po..ke...mon...be...sitzt...noch...keine... fähig....keiten!!!`
            );
        }
        for (let i = 0; i < this.attack.length; i++) {
            if (this.attack.length !== 0) {
                allAttacks.push(this.attack[i].name);
            }
        }
        return `${this.name}
            HP: ${this.kp}
            MP: ${this.mp}
            Attack: ${allAttacks.join(", ")}`;
    }

    learnAttackSkill(name) {
        this.attack.push(name);
    }
    attack(attackInd, attackPok) {
        return attackInd + attackPok;
    }
}

let bisasam = new Pokemon("Bisasam", 70, 120);
let glumanda = new Pokemon("Glumanda", 60, 90);

//------------------------------------------------------ SKILLS
class AttackSkill {
    constructor(name, kp, mp) {
        this.name = name;
        this.kp = kp;
        this.mp = mp;
    }
}
let feuerzahn = new AttackSkill("Feuerzahn", 20, 14);
let rankenhieb = new AttackSkill("Rankenhieb", 10, 18);
let rasierblatt = new AttackSkill("Rasierblatt", 20, 18);

//das pokemon soll eine neue fähigkeit bekommen

// ATTACKE = KLASSE(NAME, SCHADEN, MANA)

/**  AUFBAU
 * POKEMON.attack(GEGNER, SCHADEN, MANA)
 */

//------------------------------------------------------CONSOLE-LOG'S
// console.log(bisasam.showStatus());
// console.log(glumanda.showStatus());

glumanda.learnAttackSkill(feuerzahn);
bisasam.learnAttackSkill(rankenhieb);

console.log(glumanda.showStatus());

bisasam.learnAttackSkill(rasierblatt);

console.log(bisasam.showStatus());
console.log(glumanda.attack(0, bisasam));
// pikachu.learnAttackSkill(lightning);     -> pickachu erlernt
// bulbasaur.learnAttackSkill(poisonSeed);  -> bisasam erlern poisenSeed

//-------------------------
// glumanda.attack(0, bisasam);
//-> Glumanda greift bisasam mit Feuerzahn an weil feuerzahn an index 0 bei seinen angriffen steht.

// bisasam.attack(1, glumanda);
//-> bisasam greift glumanda mit rasierblatt an weil rasierblatt an 1 stelle im index steht

// glumanda.showStatus();
// HP: 60 - 20                  = 40
// MP: 90 - 14 + 10             = 76

// bisasam.showStatus();
// HP:  70 - 20                 = 50
// MP: 120 + 10 - 18            = 110
//-------------------------

// glumanda.attack(0, bisasam);
// glumanda.attack(0, bisasam);
// bisasam.attack(0, glumanda);
// bisasam.attack(1, glumanda);

// glumanda.showStatus();
// HP: 40 - 10 - 20             = 10
// MP: 76 - 14 - 14 + 5 + 10    = 33

// bisasam.showStatus();
// HP: 50 - 20 - 20             = 40
// MP: 110 + 10 + 10 - 18 - 18  = 94
