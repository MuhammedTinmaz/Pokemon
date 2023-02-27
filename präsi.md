# 1. class Pokemon: hat einen constructor mit den attributen (name, kp, mp)

attack und maxMP wird zwar aufgerufen in der klasse mit this. allerdings besitzen unsere new Pokemon let variablen keine. Die maxMP bezieht sich auf this.mp, deswegen werden sie im construtor nicht spezifisch aufgerufen.
(this.mp variert, maxMP bleibt immer der constante wert mp zB 120.)
(this.attack ist im constructior nicht angegeben da sie noch befüllt werden)

## Pokemon besitzt 4 methoden:

### 1. showStatus(zeigt uns die aktuellen werte von this.name,this.kp, this.mp, Attack's)an.

in dieser methode wird:

-   1.1 abgefragt ob in this.attack etwas drin ist wenn nicht also gleich 0 dann soll er einen satz returnen.
-   1.2 wenn Pokemon attacken erlernt haben werden sie angezeigt.
-   1.3 wenn die kp des pokemons kleiner gleich 0 dann zeigt er direkt 'Kampfunfähig' an und du musst ein anderes Pokemon auswählen.

### 2. learnAttackIndex()sorgt dafür das verschiedene angriffe den Pokemon beigebracht werden.

### 3. randomAttackIndex() ist ein Random Generator der attacken auswählt.

### 4. angriff() der angriff hat die parameter category und ziel.

-   4.1 wenn die kp (Leben) auf 0 ist, dann wird es als Kampfunfähig angezeigt und gibt den gewinner aus.
-   4.2 eine function für die berechnung des MP verbrauchs, für gegner und angreifer.(if-abfragen siehe .js)

# 2. class AttackSKill:

Durch die class attackSkills können wir den namen, category und schaden bestimmen.

die category haben wir im constructor Pokemon class vorgespeichert in this.attack.
wir haben mehrere attacken für jede category(light, medium, strong) und die methode randomAttackIndex sucht sich eine attacke aus, aus der ausgewählten Kategorie.

## Features:

-   angriff Arten Kategorisiert -> includes
-   zufällige Auswahl der Angriffe in den Kategorien -> includes
-   Gewinnung von Mana(ziel).-> includes
-   verlust von Mana(angreifer)-> includes

Coming with new updates....
Ideas:

-   Pokemon-Index (PokeDex)
-   Resistenzen (Typen)
-   nur erlernen von Angriffen die möglich sind (Typenbasiert)
-   Elementen Kombination (auch für MP)
-   ITEMS (HealthPotion, MP Potion, etc...)
-   Evolution wenn x Kämpfe absolviert wurden (Weiterentwicklung)
