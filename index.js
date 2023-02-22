//------------------------------------------------------POKEMON
class Pokemon {
    constructor(name, kp, mp) {
        this.name = name;
        this.kp = kp;
        this.mp = mp;
        this.attack = [];
    }
    showStatus() {
        return `
        ${this.name}'s Status: 
        KP: ${this.kp} 
        MP: ${this.mp}
        Attack: ${
            this.attack.length > 0
                ? this.attack[0].name
                : "Ich kann noch nichts"
        }`;
    }

    learnAttackSkill(name) {
        this.attack.push(name);
        sss;
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
//das pokemon soll eine neue fähigkeit bekommen

// ATTACKE = KLASSE(NAME, SCHADEN, MANA)

/**  AUFBAU
 * POKEMON.attack(GEGNER, SCHADEN, MANA)
 */

//------------------------------------------------------CONSOLE-LOG'S
console.log(bisasam.showStatus());
console.log(glumanda.showStatus());
console.log("-----------------------------------------------------");
glumanda.learnAttackSkill(feuerzahn);
console.log(glumanda.showStatus());
// console.log(glumanda.showStatus("feuerzahn"));
