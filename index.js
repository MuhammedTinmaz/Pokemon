//------------------------------------------------------POKEMON
class Pokemon {
    constructor(name, kp, mp) {
        this.name = name;
        this.kp = kp;
        this.mp = mp;
        this.maxMP = mp;
        this.attack = { light: [], medium: [], strong: [] };
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
        // this.attack[name.cat].push(name);
        this.attack[name.cat].push(name);
        console.log(this.attack[name.cat]);
    }
    angriff(category, attackIndex, ziel) {
        let attack = this.attack[category][attackIndex];
        let schaden = attack.kp;
        ziel.kp -= schaden;
        if (ziel.kp <= 0) {
            return `${ziel.name} ist Kampfunfähig. ${this.name} hat GEWONNEN.`;
        }
        function manaVerbrauchCalc(aktObj, prozent) {
            let mpVerbrauch = Math.floor(aktObj.maxMP * prozent);
            aktObj.mp -= mpVerbrauch;
            ziel.mp += schaden / 2;
            console.log(aktObj.mp);
            return `${aktObj.name} setzt ${
                attack.name
            } ein, verliert dabei ${mpVerbrauch} MP. ${ziel.name} verliert ${
                attack.kp
            } KP und 
                 bekommt ${attack.kp / 2} MP dazu.`;
        }
        if (attackIndex === 0) {
            return manaVerbrauchCalc(this, 0.15);
        }

        if (attackIndex === 1) {
            return manaVerbrauchCalc(this, 0.4);
        }
        if (attackIndex === 2) {
            return manaVerbrauchCalc(this, 0.6);
        }
    }
}
function manaVerbrauchCalc(ziel, aktObj, attack, schaden, prozent) {
    let mpVerbrauch = Math.floor(aktObj.maxMP * prozent);
    aktObj.mp -= mpVerbrauch; // wenn es klappt Math.floor entfernen
    ziel.mp += schaden / 2;
    console.log(aktObj.mp);
    return `${aktObj.name} setzt ${
        attack.name
    } ein, verliert dabei ${mpVerbrauch} MP. ${ziel.name} verliert ${
        attack.kp
    } KP und 
         bekommt ${attack.kp / 2} MP dazu.`;
}

let bisasam = new Pokemon("Bisasam", 70, 120);
let glumanda = new Pokemon("Glumanda", 60, 90);

//------------------------------------------------------ SKILLS
// number hinzufügen um die angriffe zu kategorisieren
class AttackSkill {
    constructor(name, cat, kp) {
        this.name = name;
        this.cat = cat;
        this.kp = kp;
    }
}

function randomAttackIndex() {
    return Math.floor(Math.random() * 4);
}

let feuerzahn = new AttackSkill("Feuerzahn", "light", 20);
let rankenhieb = new AttackSkill("Rankenhieb", "light", 10);
let giftpuder = new AttackSkill("Giftpuder", "light", 20);
let schlafpuder = new AttackSkill("Schlafpuder", "light", 20);
let rammen = new AttackSkill("Rammen", "light", 20);
let rasierblatt = new AttackSkill("Rasierblatt", "medium", 20);
let abc = new AttackSkill("ABC", "strong", 50);

// Das pokemon soll eine neue fähigkeit bekommen
// console.log(feuerzahn.cat.toString());
glumanda.learnAttackSkill(feuerzahn); // index 0
glumanda.learnAttackSkill(rammen); // index 0

bisasam.learnAttackSkill(rammen); // index 0
bisasam.learnAttackSkill(rankenhieb); // index 0
bisasam.learnAttackSkill(giftpuder); // index 0
bisasam.learnAttackSkill(schlafpuder); // index 0
bisasam.learnAttackSkill(rasierblatt); // index 1
bisasam.learnAttackSkill(abc); // index 2

//------------------------------------------------------CONSOLE-LOG'S

// bisasam.angriff(0, glumanda);
// bisasam.angriff(0, glumanda);
// bisasam.angriff(0, glumanda);
// bisasam.angriff(0, glumanda);
console.log(bisasam.angriff("light", 0, glumanda));
// console.log(bisasam.angriff(0, glumanda));

console.log(glumanda.showStatus());
console.log(bisasam.showStatus());
// bisasam.angriff(1, glumanda);
// console.log(bisasam.angriff(0, glumanda));
// console.log(glumanda.showStatus());
// console.log(bisasam.showStatus());
