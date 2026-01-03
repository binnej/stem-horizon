## @showdialog Project 3

In het derde project ga je met geheugen werken. Je microbit kan immers dingen onthouden. In je microbit zit een soort van ladekast. Je kan iets onthouden door het in een lade (schuif) te stoppen.

De microbit kan echter veel onthouden. Hij heeft duizenden schuiven. Opdat je alles terug vindt, moet je een stickertje met een naam op de lade plakken. Zo vind je makkelijk terug waar je iets hebt opgeslagen. 

Een lade heet in programmeertaal een variabele.

<img width="422" height="280" alt="afbeelding" src="https://github.com/user-attachments/assets/8867946b-927f-47db-97d9-682aaa115ba5" />


##

In een eerste stap ga je een sticker met een naam op de lade plakken. In programeertaal spreken we van een variabele aanmaken. Klik op de *maak een variabele...* knop. Je vindt deze terug in de gereedschapskist onder ``||Variables:maak een variabele...||``. Geef je variabele de naam *gedrukt*

## @showdialog

Je zal merken dat er nieuwe knoppen verschijnen. Naast de *maak een variabele...* knop verschijnen er drie nieuwe knoppen.

<img width="140" height="173" alt="afbeelding" src="https://github.com/user-attachments/assets/71711d03-5c44-4246-b17a-7326a88a3608" />

Wil je iets in het geheugen stoppen, dan gebruik je het ``||variables: Stel gedrukt in op 0|| blokje. Dit vind je in de gereedschapskist onder ``||variables: Variabelen||`` Helaas kan je enkel getallen opslaan in het geheugen van de microbit. 

##

Maak nu een programma dat onthoudt op welke knop, A of B je gedrukt hebt. In pseudocode ziet dat programma er zo uit:

<img width="126" height="75" alt="afbeelding" src="https://github.com/user-attachments/assets/6cd10e67-856d-440b-993d-cd9271d25e16" />

Je kan je programma al testen, maar je zal merken dat er ogenschijnlijk niks gebeurt. Wil je zeker zijn dat alles juist is, vergelijk dan met de modeloplossing. Die kan je zien door op het lampje links onderaan te klikken.

De reden is simpel. Je microbit schrijft in zijn geheugen op welke knop je gedrukt hebt, maar dat geheugen zit verborgen in de microbit. Je kan dat niet zien. 

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

## @showdialog 

In een volgende stap ga je het getal uit het geheugen van de microbit halen. Dat kan vrij eenvoudig. Het  ``||Variables: gedrukt||`` blokje bevat het getal. Als je bijvoorbeeld dit programmaatje uitvoert, dan zal het opgeslagen getal op het scherm van de microbit getoond worden. 

<img width="199" height="49" alt="afbeelding" src="https://github.com/user-attachments/assets/7be9937c-a7fa-4dc5-babc-4b2a8144ab40" />

##

In de volgende stap ga je op het scherm tonen wat er in het geheugen zit als je het logo aanraakt. De pseudocode voor je hele programma wordt:

<img width="186" height="104" alt="afbeelding" src="https://github.com/user-attachments/assets/eee63ed7-baba-42a8-aa58-c07e4ef38bdb" />

Klik op het lampje als je wil zien hoe je *toon inhoud gedrukt op het scherm* moet uitvoeren. Test je programma uit en programmeer het op de microbit.

```blocks
let gedrukt = 0
basic.showNumber(gedrukt)
```

##

Geef je geprogrammeerde microbit door aan je buur. Laat hem stiekem op knop A of B drukken zonder dat je het ziet. Raak daarna het logo aan en vertel hem op welke knop hij drukte. 


