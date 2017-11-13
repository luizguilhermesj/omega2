#!/usr/bin/node
var BlynkLib = require('blynk-library');
const Omega2Gpio = require('omega2-gpio'),
  gpio = new Omega2Gpio();


var ledPin = gpio.pin(0);

var blynk = new BlynkLib.Blynk('d166506a4e8e467c98321ec5f7948d95'); // Make sure to replace this with your Auth Token
var v1 = new blynk.VirtualPin(1);
var v2 = new blynk.VirtualPin(2);
var v3 = new blynk.VirtualPin(3);
var v4 = new blynk.VirtualPin(4);
var v5 = new blynk.VirtualPin(5);
var v6 = new blynk.VirtualPin(6);

v1.on('write', function(param) {
  changeState(param[0]);
//  console.log('V1:', param);
});
v2.on('write', function(param) {
  changeState(param[0]);
//  console.log('V2:', param);
});
v6.on('write', function(param) {
	ledPin.pwm({
        frequency: 50, // hz
        duty: param[0] // percentage (0 -> 100)
      });
})

function changeState(state) {
  state = (state == '0') ? false : true;
  ledPin.set(state);
}
