# project3b

## 

Tijd voor een eigen programmaatje. Je maakt een verkeerslicht. Als je op knop A drukt, dan verandert het verkeerslicht. 
- Is het rood, dan wordt het licht groen. 
- Is het groen, dan wordt het licht oranje. 
- Is het licht oranje, dan wordt het rood. 

Voor dit programma zal je moeten onthouden op welke kleur het verkeerlicht ingesteld staat. Maak hiervoor een variabele *kleur*. Stel deze in op 1 als het groen is, 2 als het oranje is en 3 als het rood is.

Je microbit zal ook moeten nagaan welke waarde kleur heeft. Je kan nagaan of het getal in een variabele gelijk gelijk is aan een getal. Bij ``||Logic: Logisch||`` vind je het blokje ``||Logic: 0 = 0||``. Je kan het ronde ``||Variables: kleur||`` blokje in het vakje met 0 slepen. 

Een tip kan je vinden als je op het lampje klikt.

```ghost
Verkeerslicht.stel_verkeerslicht_in_op(lichten_status.Rood);
if (input.buttonIsPressed(Button.A)) {
}
if (input.buttonIsPressed(Button.B)) {
}
if (input.logoIsPressed()) {
}
```

```blocks
let kleur = 1

if (kleur == 1) {
   kleur = 2
}
Verkeerslicht.stel_verkeerslicht_in_op(lichten_status.Rood);
```

##

Heb je je programma getest op de virtuele microbit? Heb je het geprogrammeerd en uitgeprobeerd? Dan mag je een screenshot van je programma plakken in de werkbundel. 

Loop je voor op de rest? Dan mag je project 3c maken. 

