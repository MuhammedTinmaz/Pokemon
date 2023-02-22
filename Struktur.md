1. ist mehr mana als maxMP möglich
2. kategorisierung: 3 arrays

mit filter ausfiltern was das pokemon beherrscht um dann eine zufallszahl erzeugen um anzugreifen.


const skills = {
    1 : [feuerzahn, glut, rankenhieb, rasierblatt]
    2 : [flammenwurf, hitzestoß, giftpuder, zerschneider]
    3 : [feuergeschoss, feuerwirbel, flammenmähne]
}


for(let i=0; i< skills.length; i++)
Math.floor(Math.random()* skills.length)
    if(i===0){
        dann Math.floor(Math.random()* inhalt.length)
}


angriff(obj, ziel) {
    let attackIndex = 
        let attack = this.attack[attackIndex];
        let schaden = attack.kp;
        ziel.kp -= schaden;
        if (attackIndex === 0) {
            this.mp = Math.floor(this.mp * 0.85);
            ziel.mp += schaden / 2;
        }
        return `${this.name} setzt ${attack.name} ein, verliert dabei ${
            attack.mp
        } MP. ${ziel.name} verliert ${attack.kp} KP und 
         bekommt ${attack.mp / 2} MP dazu.`;
    }


angriff(ziel){
    let attackIndex = Math.floor(Math.random()*skills.length)
    if (attackIndex === 0){
        RECHNUNG
    }if else(attackIndex === 1 ){
        RECHNUNG
    }if else(attackIndex === 2 ){
        RECHNUNG
    }
}

angriff(attackIndex, ziel){
    let attack = Math.floor(Math.random()*skills.length)
    if (attackIndex === 0){
        Math.floor(Math.random()*attackIndex.length)
    }if else(attackIndex === 1 ){
        Math.floor(Math.random()*attackIndex.length)
    }if else(attackIndex === 2 ){
        Math.floor(Math.random()*attackIndex.length)
    }
}