

# Horizon STEM: Kloppend hart

## @showdialog 

Voor je aan deze tutorial begint, controleer je even of je de juiste internetbrowser gebruikt. 


## @showdialog

In je eerste programma toon je een kloppend hart op het schermpje van je microbit. 
Heb je vroeger reeds een kloppend hart gemaakt? Let dan even op, want je zal zien
dat je het hier iets anders moet doen. We willen je immers de echte basis van programmeren aanleren.


## 

Je hebt het ``||basic: de hele tijd||`` blokje niet nodig. Sleep het terug in de gereedschapskist om het te verwijderen. 

## 

Zoek het ``||loops: terwijl - doe||`` blokje. Je vindt het bij ``||Loops: Lussen||``. Sleep het blokje in het ``||basic: bij opstarten||`` blokje. 

## @showdialog

Het ``||loops: terwijl - doe||`` doe blokje herhaalt alle opdrachten die je erin plaatst. Het is zeer gelijkaardig aan het 
herhalen totdat blokje van het doolhof. In het doolhof programma bleef de computer de instructies herhalen totdat 
het mannetje aan zijn eindbestemming kwam. Bij de microbit kan je zelf instellen hoe lang de microbit het moet herhalen.
Het hart moet eeuwig blijven kloppen. De microbit moet de code dus eeuwig herhalen.

##

Verander de voorwaarde in het ``||loops: terwijl - doe||`` van ``||logic: onwaar||`` naar ``||logic: waar||``.
Klik daarvoor op het driehoekje naast waar. 

Alle blokjes in het ``||loops: terwijl - doe||`` blokje zullen nu voor eeuwig herhaald worden. 


##

Goed tijd om het kloppende hart te maken. Je programma moet de hele tijd het volgende uitvoeren:
[Text to link](https://www.google.com)


<img width="160" height="92" alt="afbeelding" src="https://github.com/user-attachments/assets/bf24f4ac-8d34-432a-b647-067f56d46363" />

Maak je programma af, gebruik enkel deze blokjes:
``||basic: toon pictogram||``, ``||basic: wis scherm||`` en ``||basic: pauzeer (ms)||``

Druk daarna op volgende.

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

## @showDialog

Heb je al gemerkt dat er een microbit op je scherm staat? Deze virtuele microbit draait jouw programma. Handig,
zo kan je nakijken of alles naar behoren werkt. Je kan zelfs met je muis op knop A en B klikken. Dat zal nu nog niet veel doen.
Je hebt dat immers nog niet geprogrammeerd... Voor je een programma op de microbit zet, is het slim om even te kijken of alles werkt
op de virtuele microbit. Daar zie je snel of alles werkt en kan je je programma nog corrigeren. 

## 

Kijk naar de virtuele microbit. Doet je programma wat je verwacht? Goed! Anders, kijk even na wat er mis is. Je kan bij de hints
ook de modeloplossing vinden. 

```blocks
while (true) {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
}
```


##

Je moet nu nog je programma naar de microbit downloaden. Het programma staat op je computer, maar nog niet op de microbit. 
Links onderaan zie je een grote knop "downloaden" staan. Daar klik je *niet* op. Klik op de drie puntjes die ernaast staan.
Klik vervolgens op *verbind het apparaat* en volg de instructies op het scherm. Eénmaal de verbinding gemaakt is,
kan je op de *Downloaden* knop drukken om het programma op de microbit te zetten. Doe dit nu. 

##

Proficiat, je hebt net je eerste microbit programma geschreven! Maak een screenshot van je programma en plak dit in je werkbundel. 

<!--

/**
* Gebruik dit bestand om specifieke functies en blokken te definiëren.
* Lees meer op https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    <!--

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
-->
