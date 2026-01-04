# project4

## @showdialog Draadloos

Je microbit kan draadloos communiceren met een andere microbit! Je microbit heeft een klein radiozendertje aan boord en ook een radio ontvanger. Hiermee kan je onderandere getallen naar mekaar
doorsturen. Net zoals de radio thuis, moet je de microbit instellen op de juiste frequentie, of de juiste groep. Een microbit kan op 256 groepen uitzenden. 

In de klas zijn er een 25-tal microbits aanwezig. Het is belangrijk dat elk groepje werkt op zijn eigen kanaal. Anders ga je boodschappen ontvangen van de verkeerde microbits. 
Om dit in goede banen te leiden, spreken we af dat voor het groepsnummer je klasnummer maal 10 gebruikt. Dus heb je klasnummer 5, dan gebruik je groep 50. 

Om dit programma tot een goed einde te brengen moet je samenwerken met je buur. Iemand programmeert de zender (afstandsbediening) en iemand anders programmeert de ontvanger.
Zorg ervoor dat je allebei op hetzelfde kanaal werkt. Neem het klasnummer maal tien van de persoon die de zender programmeert. Tip: de ontvanger schrijven is iets moelijker dan de zender.

##

De pseudocode voor de zender ziet er zo uit:

<img width="276" height="159" alt="afbeelding laden..." src="https://github.com/user-attachments/assets/2c9b0187-1f30-4597-998b-dec1c0d403f8" />

Je vindt alle blokjes in verband met de zender in de gereedschapskist bij ``||Radio: Radio||``

Voor de pseudocode van de ontvanger druk je even op volgende.

## showdialog Inleiding ontvanger

De ontvanger kan helaas niet werken met het ``||basic: bij opstarten||`` blokje. Er is wel een speciaal blokje ``||Radio: Wanneer de radio ontvangt receivedNumber||``. Telkens als de microbit 
een getal ontvangt op de ingestelde groep, wordt de code die je in dit blokje plakt uitgevoerd. Het getal dat hij ontvangen heeft, stopt de microbit in het geheugen. Waar? In de variabele (schuif) met naam
*receivedNumber*. Dat betekent ontvangen getal in het Nederlands.  

Programmeer je programma naar de microbit. Help je buur als hij nog niet klaar is. 

## 

In je eerste programma toon je het ontvangen getal op het scherm. Bouw daarvoor deze code na:

<img width="651" height="141" alt="afbeelding" src="https://github.com/user-attachments/assets/2a4f40cf-a13c-4b0c-a08e-f2023d8302bc" />

Tip: probeer je het rode *receivedNumber* blokje in het blauwe *toon nummer* blokje te krijgen? Je kan het slepen van. Klik met je muiswijzer in het rode *receivedNumber* blokje en sleep het naar het *toon nummer* blokje.

Programmeer het programma op de microbit. Help je buur als hij nog niet klaar is.

##

Nu is het tijd om het programma te testen. Druk op de zender op knop A en je moet 1 zien verschijnen op de ontvanger. Druk op B en je ziet 2 verschijnen. 
Werkt het? Druk op volgende...

##

Pas nu de code van de ontvanger aan. Stop de ontvanger in het verkeerslichtje. Als je op knop A drukt op de zender, moet het verkeerslicht van de ontvanger op rood springen. Druk je op B, dan moet het op groen springen. Raak je het logo aan dan moet het op oranje springen. 

Dit ga je met een ``||logic: als ... dan||`` blokje moeten doen. Maar hoe kan je vergelijken of het ontvangen nummer gelijk is aan 1? Daar is uiteraard een blokje voor! Bij ``||logic: Logisch||`` vind je dit blokje:

<img width="167" height="45" alt="afbeelding" src="https://github.com/user-attachments/assets/35bc5bd2-19a5-40b1-bf3d-9250658f8e93" />

Sleep je variable aan de linker kant van het gelijkheidsteken en het getal aan de andere kant. Sleep dit blokje dan in zijn geheel in het ``||logic: als ... dan||``blokje.
##

Je maakte net een verkeerslicht met een afstandsbediening! Kopieer zowel de code van de zender als ontvanger in je werkbundel. 









   

      

