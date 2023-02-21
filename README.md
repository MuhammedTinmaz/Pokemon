# Pokemon

1. ## Class: 'Pokemon' (Name, Health, Magic,(Skills(Array,Objects)))
2. ## Class; 'AttackSkill' (neue Attacken mit Magieverbrauch) constructor function
### Attacken: (Name, Schaden, Magieverbrauch)
```js
let lightning = new AttackSkill("lightning", 40'KP', 30'MP');
```
-------------------------------
### Methode: 
1. 'learnAttackSkill' -> (like:'lightning') -> join 'AttackSkill'
```js
pikachu.learnAttackSkill(lightning);
```

2. 'showStatus' -> (Gesundheit und Magie)-> zeigt wieviel noch übrig von den werten <- ist .

3. 'attack' -> (Index,Gegner) -> nimmt einem 'AttackSkill' und greift anderes Pokemon an. Möglichkeiten wenn Magie nicht ausreicht hinzufügen.an
'attack'call on 'AttackSkill'


Beispiel:

- pikachu.attack(0,bisasam) = erster erlernter Angriff macht X Schaden auf bisasam und entzieht Pikachu X Magiepunkte.

```JS
class Attackskill {
    constructor(name, damage, magic) {
        this.name = name;
        this.damage = damage;
        this.magic = magic;
    }
}
let lightning = new Attackskill("lightning", 30, 30);

klasse für pokemon

pikachu
bisasam
glumanda
schiggi
raupi

pikachu erstellt -> 100HP, 100KP
bisasam erstellt -> 100HP, 100KP

pikachu.attack(0,bisasam) -> 
pikachu.showStatus(100HP, 70KP)
bisasam.showStatus(70HP, 100KP)
```
----------------------------------
```JS
//Jedes Pokemon sollte mit einer bestimmten Menge an Gesundheit und Magie starten. Hier beginnt Pikachu zum Beispiel mit 120 Lebenspunkten und 80 Magie
let pikachu = new Pokemon("pikachu", 120'HP', 80'MP');
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

// Jede Fähigkeit sollte eine bestimmte Menge Schaden anrichten und eine bestimmte Menge Magie von dem Pokemon verbrauchen, das die Fähigkeit benutzt hat.
let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill ("poison seed", 20, 20);
pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);
```
------------------------------
GETTER UND SETTER
```JS
class ClassWithGetSet {
  #msg = "hello world";
  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `hello ${x}`;
  }
}

const instance = new ClassWithGetSet();
console.log(instance.msg); // "hello world"

instance.msg = "cake";
console.log(instance.msg); // "hello cake"
```