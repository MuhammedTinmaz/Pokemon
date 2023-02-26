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
        if (
            Object.values(this.attack).every((attacks) => attacks.length === 0)
        ) {
            return `
            ${this.name}, Die..ses...Po..ke...mon...be...sitzt...noch...keine... fähig....keiten!!!`;
        }
        if (this.kp <= 0) {
            return `${this.name} ist Kampfunfähig. Wähle ein anderes Pokemon aus.`;
        }
        for (let category in this.attack) {
            if (this.attack[category].length !== 0) {
                this.attack[category].forEach((attack) =>
                    allAttacks.push(attack.name)
                );
            }
        }
        return `${this.name}'s Status:
            HP: ${this.kp}
            MP: ${this.mp}
            Attack's: ${allAttacks.join(", ")}`;
    }
    randomAttackIndex(category) {
        const randomIndex = Math.floor(
            Math.random() * this.attack[category].length
        );
        return randomIndex;
    }
    learnAttackSkill(name) {
        this.attack[name.atkCat].push(name);
        // console.log(this.attack[name.atkCat]);
    }
    angriff(category, ziel) {
        let randomIndex = this.randomAttackIndex(category);
        let attack = this.attack[category][randomIndex];
        let schaden = attack.kp;
        ziel.kp -= schaden;

        if (ziel.kp <= 0) {
            return `${ziel.name} ist Kampfunfähig. ${this.name} hat GEWONNEN.`;
        }
        function manaVerbrauchCalc(atkObj, prozent) {
            let mpVerbrauch = Math.floor(atkObj.maxMP * prozent);
            atkObj.mp -= mpVerbrauch;
            ziel.mp += schaden / 2;

            return `${atkObj.name} setzt ${
                attack.name
            } ein, verliert dabei ${mpVerbrauch} MP. ${ziel.name} verliert ${
                attack.kp
            } KP und 
                 bekommt ${attack.kp / 2} MP dazu.`;
        }
        if (category === "light") {
            return manaVerbrauchCalc(this, 0.15);
        }
        if (category === "medium") {
            return manaVerbrauchCalc(this, 0.4);
        }
        if (category === "strong") {
            return manaVerbrauchCalc(this, 0.6);
        }
    }
}

let bisasam = new Pokemon("Bisasam", 70, 120);
let glumanda = new Pokemon("Glumanda", 60, 90);
let glurak = new Pokemon("Glurak", 190, 90);

//------------------------------------------------------ SKILLS
class AttackSkill {
    constructor(name, atkCat, kp) {
        this.name = name;
        this.atkCat = atkCat;
        this.kp = kp;
    }
}

let feuerzahn = new AttackSkill("Feuerzahn", "light", 20);
let rankenhieb = new AttackSkill("Rankenhieb", "light", 10);
let giftpuder = new AttackSkill("Giftpuder", "light", 20);
let schlafpuder = new AttackSkill("Schlafpuder", "light", 20);
let rammen = new AttackSkill("Rammen", "light", 20);
let rasierblatt = new AttackSkill("Rasierblatt", "medium", 20);
let abc = new AttackSkill("ABC", "strong", 50);

glumanda.learnAttackSkill(feuerzahn); // index 0
glumanda.learnAttackSkill(rammen); // index 0

bisasam.learnAttackSkill(rammen); // index 0
bisasam.learnAttackSkill(rankenhieb); // index 0
bisasam.learnAttackSkill(giftpuder); // index 0
bisasam.learnAttackSkill(schlafpuder); // index 0
bisasam.learnAttackSkill(rasierblatt); // index 1

//------------------------------------------------------CONSOLE-LOG'S

console.log(glumanda.showStatus());
console.log(bisasam.showStatus());
console.log(bisasam.angriff("light", glumanda));
console.log(bisasam.angriff("light", glumanda));

console.log(glumanda.showStatus());
console.log(bisasam.showStatus());
console.log(glumanda.angriff("light", bisasam));

console.log(glumanda.showStatus());
console.log(bisasam.showStatus());
console.log(bisasam.angriff("light", glumanda));
console.log(bisasam.angriff("light", glumanda));
console.log(glumanda.showStatus());
