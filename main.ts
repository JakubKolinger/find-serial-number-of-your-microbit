basic.forever(function () {
    serial.writeLine("Serial Number: " + control.deviceSerialNumber())
    basic.pause(10000) // opakuje každých 10 sekund, můžeš změnit nebo dát pryč
})

