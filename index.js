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
        return `${this.name}'s Status:
            HP: ${this.kp}
            MP: ${this.mp}
            Attack's: ${allAttacks.join(", ")}`;
    }

    learnAttackSkill(name) {
        this.attack.push(name);
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

/** AUFBAU
 * POKEMON.attack(GEGNER, SCHADEN, MANA)
 **/

//------------------------------------------------------CONSOLE-LOG'S
glumanda.learnAttackSkill(feuerzahn);
bisasam.learnAttackSkill(rankenhieb);
// console.log(glumanda.showStatus());
// console.log(glumanda.showStatus("feuerzahn"));
bisasam.learnAttackSkill(rasierblatt);
console.log(bisasam.showStatus());
