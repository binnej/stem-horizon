

# Horizon STEM: Kloppend hart

## @showdialog 

Voor je aan deze tutorial begint, controleer je even of je de juiste internetbrowser gebruikt. Voor deze opdrachten gebruik je *Microsoft Edge* of *Google Chrome*. Je herkent deze browsers aan hun icoontjes. 
<img width="672" height="194" alt="afbeelding" src="https://github.com/user-attachments/assets/2fd92872-6715-4dbb-8f6c-558c2ba0f6e7" />

Met deze browsers kan je met een druk op de knop je microbit programmeren. Bij de andere browsers is dat complexer. 

## @showdialog

In je eerste programma toon je een kloppend hart op het schermpje van je microbit. Heb je vroeger reeds een kloppend hart gemaakt? Let dan even op, want je zal zien
dat je het hier iets anders moet doen. We willen je programma's leren schrijven die stap voor stap werken. Dat maakt de overstap naar andere programmeertalen, zoals Python, makkelijker. 

Volg de instructies bovenaan rechts op je scherm om je eerste programma te maken; 


## 

Je hebt het ``||basic: de hele tijd||`` blokje niet nodig. Sleep het terug in de gereedschapskist om het te verwijderen. 

## 

Zoek het ``||loops: terwijl - doe||`` blokje. Je vindt het bij ``||Loops: Lussen||``. Sleep het blokje in het ``||basic: bij opstarten||`` blokje. 

## @showdialog

Het ``||loops: terwijl - doe||`` blokje herhaalt alle opdrachten die je erin plaatst. Het is zeer gelijkaardig aan het 
*herhalen totdat*-blokje van het doolhof. In het doolhof programma bleef de computer de instructies herhalen totdat 
het mannetje aan zijn eindbestemming kwam. 

<img width="536" height="92" alt="afbeelding aan het laden..." src="https://github.com/user-attachments/assets/ea257560-097a-4bad-a2d5-ed667f76ff19" />

Bij de microbit kan je zelf instellen hoe lang de microbit het moet herhalen.
Het hart moet eeuwig blijven kloppen. De microbit moet de code dus eeuwig herhalen. Hoe je dat instelt, zie je zo meteen. 

##

Verander de voorwaarde in het ``||loops: terwijl - doe||`` van ``||logic: onwaar||`` naar ``||logic: waar||``.
Klik daarvoor op het driehoekje naast onwaar. 

Alle blokjes in het ``||loops: terwijl - doe||`` blokje zullen nu voor eeuwig herhaald worden. 


##

Goed, tijd om het kloppende hart te maken. Je krijgt alvast de pseudo-code mee:

<img width="160" height="92" alt="afbeelding aan het laden..." src="https://github.com/user-attachments/assets/bf24f4ac-8d34-432a-b647-067f56d46363" />

Maak je programma af, gebruik enkel deze blokjes:
``||basic: toon pictogram||``, ``||basic: wis scherm||`` en ``||basic: pauzeer (ms)||``

Druk daarna op volgende.



## @showDialog

Heb je al gemerkt dat er een microbit op je scherm staat? Deze virtuele microbit draait jouw programma. Handig,
zo kan je nakijken of alles naar behoren werkt. Je kan zelfs met je muis op knop A en B klikken. Dat zal nu nog niet veel doen.
Je hebt dat immers nog niet geprogrammeerd... Voor je een programma op de microbit zet, is het slim om even te kijken of alles werkt
op de virtuele microbit. Daar zie je snel of alles werkt en kan je je programma nog corrigeren. 

## 

Kijk naar de virtuele microbit. Doet je programma wat je verwacht? Goed! Anders, kijk even na wat er mis is. Je kan bij de hints
ook de modeloplossing vinden. Klik dan op het <img width="16" height="16" alt="afbeelding" src="https://github.com/user-attachments/assets/8595171e-ce31-4367-9c5d-48f20d5f0691" /> icoontje. 


```blocks
while (true) {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
}
```


##

Je moet nu nog je programma naar de microbit downloaden. Het programma staat op je computer, maar nog niet op de microbit zelf. 
Links onderaan zie je een grote knop "downloaden" staan. Daar klik je **niet** op. Klik op de drie puntjes die ernaast staan.
Klik vervolgens op **verbind het apparaat** en volg de instructies op het scherm. Eénmaal de verbinding gemaakt is,
kan je op de **Downloaden** knop drukken om het programma op de microbit te zetten. Doe dit nu. Het downloaden zal even duren. Tijdens het downloaden zullen op de achterkant van de microbit enkele ledjes beginnen flikkeren. 

##

Proficiat, je hebt net je eerste microbit programma geschreven! Maak een screenshot van je programma en plak dit in je werkbundel. Beantwoord ook de vragen. 

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
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
