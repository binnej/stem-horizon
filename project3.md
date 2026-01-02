## @showdialog()

In het derde project ga je met geheugen werken. Je microbit kan immers dingen onthouden. In je microbit zit een soort van ladekast. Je kan iets onthouden door het in een lade (schuif) te stoppen.
De microbit kan echter veel onthouden. Hij heeft duizenden schuiven. Opdat je alles terug vindt, moet je een stickertje met een naam op de lade plakken. Zo vind je makkelijk terug waar je iets
hebt opgeslagen. 

Een lade heet in programmeertaal een variabele.

##

In een eerste stap ga je een sticker met een naam op de lade plakken. In programeertaaltermen ga je een variabele aanmaken. Klik op de *maak een variabele...* Je vind deze terug in de
gereedschapskist onder ``||Variables:maak een variabele...||``. Geef je variabele de naam *gedrukt*

##

Maak nu een programma dat onthoudt op welke knop, A of B je gedrukt hebt. In pseudocode ziet dat programma er zo uit:
herhaal altijd:
   als knop A gedrukt:
      gedrukt wordt 1
   als knop B gedrukt:
      gedrukt wordt 2

Je kan je programma al testen, maar je zal merken dat er niks gebeurt. Wil je zeker zijn dat alles juist is, vergelijk dan met de modeloplossing. Die kan je zien door op het lampje te klikken.

```blocks
 let gedrukt = 0
while (false) {
    if (input.buttonIsPressed(Button.A)) {
        gedrukt = 1
    }
    if (input.buttonIsPressed(Button.B)) {
        gedrukt = 2
    }
}

```
