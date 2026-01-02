
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
    Groen
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
//% weight=100 color=#0fbc11 icon=""
namespace Verkeerslicht {
    /**
     * Met dit blokje kan je de verkeerslichten aansturen. 
     * @param e De kleur van de lamp die op het verkeerslicht moet aangaan. 
     */
    //% block
    export function stel_verkeerslicht_in_op(e: lichten_status): void {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)

        if (e == lichten_status.Rood) {
            pins.digitalWritePin(DigitalPin.P0, 1)
        }
        if (e == lichten_status.Oranje) {
            pins.digitalWritePin(DigitalPin.P1, 1)
        }
        if (e == lichten_status.Groen) {
            pins.digitalWritePin(DigitalPin.P2, 1)
        }
    }

    export function verkeerslicht_lampjes(rood: aan_uit): void {
        let r = 1
        pins.digitalWritePin(DigitalPin.P0, r)
    }

    export function dud(): void {
    }

}
