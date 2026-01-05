basic.forever(function () {
	
})


/**
* Gebruik dit bestand om specifieke functies en blokken te definiëren.
* Lees meer op https://makecode.microbit.org/blocks/custom
*/

enum lichten_status {
    //% block="Rood" 
    Rood,
    //% block="Oranje"
    Oranje,
    //% block="Groen" 
    Groen,
    //% block="Alles af"
    Af
}

enum aan_uit {
    //% block="aan"
    aan,
    //% block="uit"
    uit
}

/**
 * Custom blocks
 */
//% weight=100 color=#000080 icon=""
namespace Verkeerslicht {
    /**
     * Met dit blokje kan je één of geen van de lampjes op het verkeerslicht doen branden.
     * @param e De kleur van de lamp die op het verkeerslicht moet aangaan. 
     */
    //% block
    export function stel_verkeerslicht_in_op(kleur: lichten_status): void {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)

        if (kleur == lichten_status.Rood) {
            pins.digitalWritePin(DigitalPin.P0, 1)
        }
        if (kleur == lichten_status.Oranje) {
            pins.digitalWritePin(DigitalPin.P1, 1)
        }
        if (kleur == lichten_status.Groen) {
            pins.digitalWritePin(DigitalPin.P2, 1)
        }
    }

    /**
    * Met dit blokje kan je de lampjes van het verkeerslicht instellen zoals je wil.
    * @param rood: rood lampje aan of aan_uit
    * @param oranje: oranje lampje aan of aan_uit
    * @param groen: groen lampje aan of aan_uit
    */
    //% block color=#ff00cc 
    export function verkeerslicht_lampjes_rood_groen_blauw(rood: aan_uit, oranje: aan_uit, groen: aan_uit): void {
        let r = rood == aan_uit.aan ? 1 : 0
        let o = oranje == aan_uit.aan ? 1 : 0
        let g = groen == aan_uit.aan ? 1 : 0

        pins.digitalWritePin(DigitalPin.P0, r)
        pins.digitalWritePin(DigitalPin.P1, o)
        pins.digitalWritePin(DigitalPin.P2, g)
    }


}