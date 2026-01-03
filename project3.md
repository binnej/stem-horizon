## @showdialog()

In het derde project ga je met geheugen werken. Je microbit kan immers dingen onthouden. In je microbit zit een soort van ladekast. Je kan iets onthouden door het in een lade (schuif) te stoppen.

De microbit kan echter veel onthouden. Hij heeft duizenden schuiven. Opdat je alles terug vindt, moet je een stickertje met een naam op de lade plakken. Zo vind je makkelijk terug waar je iets hebt opgeslagen. 

Een lade heet in programmeertaal een variabele.

<img width="844" height="563" alt="afbeelding" src="https://github.com/user-attachments/assets/8867946b-927f-47db-97d9-682aaa115ba5" />


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

##

In de volgende stap ga je op het scherm tonen wat er in het geheugen zit als je het logo aanraakt. De pseudocode voor je hele programma wordt:
herhaal altijd:
   als knop A gedrukt:
      gedrukt wordt 1
   als knop B gedrukt:
      gedrukt wordt 2
   als logo aangeraakt:
      toon inhoud gedrukt op scherm

Klik op het lampje als je wil zien hoe je *toon inhoud gedrukt op het scherm* moet uitvoeren. Test je programma uit en programmeer het op de microbit.

```blocks
let gedrukt = 0
basic.showNumber(gedrukt)
```

##

Geef je geprogrammeerde microbit door aan je buur. Laat hem stiekem op knop A of B drukken zonder dat je het ziet. Raak daarna het logo aan en vertel hem op welke knop hij drukte. 


