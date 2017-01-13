/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global mAllObjects, gEngine */
/*jslint node: true, vars: true, evil: true, bitwise: true */
"use strict";
var gObjectNum = 0;
function userControl(event) {
    var keycode;

    if (window.event) {// IE
        keycode = event.keyCode;
    } else if (event.which) {// Netscape/Firefox/Opera  
        keycode = event.which;
    }
    if (keycode >= 48 && keycode <= 57) {
        if (keycode - 48 < gEngine.Core.mAllObjects.length) {
            gObjectNum = keycode - 48;
        }
    }
    if (keycode === 38) { //up arrow
        if (gObjectNum > 0) {
            gObjectNum--;
        }
    }
    if (keycode === 40) {// down arrow
        if (gObjectNum < gEngine.Core.mAllObjects.length - 1) {
            gObjectNum++;
        }
    }

    // move with WASD keys
    if (keycode === 87) { //W
        gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(0, -10));
    }
    if (keycode === 83) { // S
        gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(0, +10));
    }
    if (keycode === 65) { //A
        gEngine.Core.mAllObject[gObjectNum].move(new Vec2(-10, 0));
    }
    if (keycode === 68) { //D
        gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(10, 0));
    }

    // Rotate with QE keys
    if (keycode === 81) { //Q
        gEngine.Core.mAllObjects[gObjectNum].rotate(-0.1);
    }
    if (keycode === 69) { //E
        gEngine.Core.mAllObjects[gObjectNum].rotate(0.1);
    }

    // Toggle gravity with the H key
    if (keycode === 72) { //H
        if (gEngine.Core.mAllObjects[gObjectNum].mFix === 0)
            gEngine.Core.mAllObjects[gObjectNum].mFix = 1;
        else
            gEngine.Core.mAllObjects[gObjectNum].mFix = 0;
    }


    if (keycode === 70) {//f
        var r1 = new Rectangle(new Vec2(gEngine.Core.mAllObjects[gObjectNum].mCenter.x,
                gEngine.Core.mAllObjects[gObjectNum].mCenter.y),
                Math.random() * 30 + 10, Math.random() * 30 + 10);
    }
    if (keycode === 71) {//g
        var r1 = new Circle(new Vec2(gEngine.Core.mAllObjects[gObjectNum].mCenter.x,
                gEngine.Core.mAllObjects[gObjectNum].mCenter.y),
                Math.random() * 10 + 20);
    }

    if (keycode === 82) { //R
        gEngine.Core.mAllObjects.splice(5, gEngine.Core.mAllObjects.length);
        gObjectNum = 0;
    }

}