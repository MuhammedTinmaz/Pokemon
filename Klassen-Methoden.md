# 1. Pokemon(Klasse)
----------------------------------------------------------------
## Standart Werte

```
Elektro: 95MP
Pflanze: 120MP
Feuer/Unlicht: 90MP
Wasser/Eis: 95MP
Käfer/Gift: 140MP
Flug/Normal: 110MP
Kampf/Boden: 100MP
Psycho/Geist: 85MP
Stahl/Gestein: 80MP
Drache/Fee: 130MP
```
## Werte Kombinationen
---------------------------------------------------------------
```
leichter Angriff : 15% ges.MP
mittlerer Angriff : 40% ges.MP
schwerer Angriff : 60% ges.MP

1 = leichter angriff
2 = mittlerer angriff
3 = schwerer angriff
```
--------------------------------------------------------------
# 2. AttackSkill(Klasse)

METHOD'S DETAILS

```
1. learnAttackSkill():
- Pokemon erlernt neue Attacken von der Klasse AttackSkill.

2. attack():
- Abzug von mana von angreifer kommt in die attack  methode, auch das + mana für den angeriffenen kommt in die attack 'methode'.
- wenn Pikachu schaden bekommt (20KP), dann füge (20/2 = 10MP)hinzu und er verliert 20HP.
- Bisasam verliert 20MP.
```

string zusammen bauen mit
let status= string is leer und in jedem schritt füg was hinzu erst name kp mp dann schleife dann attacke darin hinzufügen und am ende mit return string wieder geben .

return sting +=
return irgendwelche attacken details
schluss
return string

wenn ihr in eurem return sting einem zeilem umbruch haen wollt dann macht ihr das mit '\n'
