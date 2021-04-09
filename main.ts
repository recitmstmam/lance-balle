input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P1, Vd)
    pins.analogWritePin(AnalogPin.P2, Vg)
    for (let index = 0; index < 2; index++) {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
        Vg += 256
        Vd += 256
        basic.pause(100)
    }
    Vd = 1023
    Vg = 1023
    pins.analogWritePin(AnalogPin.P1, Vd)
    pins.analogWritePin(AnalogPin.P2, Vg)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(87)
    basic.pause(500)
    servos.P0.setAngle(24)
})
let Vg = 0
let Vd = 0
servos.P0.setAngle(24)
Vd = 512
Vg = 512
basic.pause(1000)
servos.P0.stop()
