pins.digitalWritePin(DigitalPin.P0, 1)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) > 100) {
        basic.showIcon(IconNames.Yes)
        control.waitMicros(2000000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        control.waitMicros(500)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P1, 0)
        control.waitMicros(500000)
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
