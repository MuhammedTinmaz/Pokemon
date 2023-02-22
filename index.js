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
    angriff(attackIndex, ziel) {
        let attack = this.attack[attackIndex];
        let schaden = attack.kp;
        ziel.kp -= schaden;
        let currentVal = this.mp;
        if (attackIndex === 0) {
            let result = Math.floor(this.mp * 0.15);
            currentVal = Math.floor(this.mp * 0.85);
            ziel.mp += schaden / 2;
            return `${this.name} setzt ${
                attack.name
            } ein, verliert dabei ${result} MP. ${ziel.name} verliert ${
                attack.kp
            } KP und 
             bekommt ${attack.kp / 2} MP dazu.`;
        }
        if (attackIndex === 1) {
            let result = Math.floor(this.mp * 0.4);
            this.mp = Math.floor(this.mp * 0.6);
            ziel.mp += attack.kp / 2;
            return `${this.name} setzt ${
                attack.name
            } ein, verliert dabei ${result} MP. ${ziel.name} verliert ${
                attack.kp
            } KP und 
             bekommt ${attack.kp / 2} MP dazu.`;
        }
        if (attackIndex === 2) {
            let result = Math.floor(this.mp * 0.6);
            this.mp = Math.floor(this.mp * 0.4);
            ziel.mp += attack.kp / 2;
            return `${this.name} setzt ${
                attack.name
            } ein, verliert dabei ${result} MP. ${ziel.name} verliert ${
                attack.kp
            } KP und 
             bekommt ${attack.kp / 2} MP dazu.`;
        }
        if (ziel.kp <= 0) {
            return `${ziel.name} ist Kampfunfähig. ${this.name} hat GEWONNEN.`;
        }
    }
}
let bisasam = new Pokemon("Bisasam", 70, 120);
let glumanda = new Pokemon("Glumanda", 60, 90);

//------------------------------------------------------ SKILLS
// number hinzufügen um die angriffe zu kategorisieren
class AttackSkill {
    constructor(name, kp) {
        this.name = name;
        this.kp = kp;
    }
}

let feuerzahn = new AttackSkill("Feuerzahn", 20);
let rankenhieb = new AttackSkill("Rankenhieb", 50);
let rasierblatt = new AttackSkill("Rasierblatt", 20);

// Das pokemon soll eine neue fähigkeit bekommen
glumanda.learnAttackSkill(feuerzahn); // index 0
bisasam.learnAttackSkill(rankenhieb); // index 0
bisasam.learnAttackSkill(rasierblatt); // index 1

//------------------------------------------------------CONSOLE-LOG'S

bisasam.angriff(0, glumanda);
// bisasam.angriff(0, glumanda);
// bisasam.angriff(0, glumanda);
// console.log(bisasam.angriff(0, glumanda));

console.log(glumanda.showStatus());
console.log(bisasam.showStatus());
// bisasam.angriff(1, glumanda);
// console.log(bisasam.angriff(0, glumanda));
// console.log(glumanda.showStatus());
// console.log(bisasam.showStatus());
