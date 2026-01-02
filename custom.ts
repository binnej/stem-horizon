
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
    export function foo(e: lichten_status): void {
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

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
