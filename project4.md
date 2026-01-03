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

radio instellen groep klasnummer maal 10
   herhaal eeuwig:
      als knop A ingedrukt:
          radio verzend nummer 1
      als knop B ingedrukt:
          radio verzend nummer 2
      als logo aangeraakt wordt:
          radio verzend nummer 3 
Je vindt alle blokjes in verband met de zender in de gereedschapskist bij ``||Radio: Radio||``


Voor de pseudocode van de ontvanger druk je even op volgende.

## showdialog Inleiding ontvanger

De ontvanger kan helaas niet werken met het ``||basic: bij opstarten||`` blokje. Er is wel een speciaal blokje ``||Radio: Wanneer de radio ontvangt receivedNumber||``. Telkens als de microbit 
een getal ontvangt op de ingestelde groep, wordt de code die je in dit blokje plakt uitgevoerd. Het getal dat hij ontvangen heeft, stopt de microbit in het geheugen. Waar? In de variabele (schuif) met naam
*receivedNumber*. Dat betekent ontvangen getal in het Nederlands.  

## 

In je eerste programma toon je het ontvangen getal op het scherm. Bouw daarvoor deze code na:






   

      

