/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global mAllObject, gEngine */
/*jslint node: true, vars: true, evil: true, bitwise: true */
/*global document */
"use strict";  // Operate in Strict mode such that variables must be declared before used!
function userControl(event) {
    var keycode;
    var width = gEngine.Core.mWidth;
    var height = gEngine.Core.mHeight;
    var context = gEngine.Core.mContext;
    if (window.event) { // IE
        keycode = event.keyCode;
    } else if (event.which) {// Netscape/Firefox/Opera  
        keycode = event.which;
    }
    if (keycode === 70) {
        //f
        //create new Rectangle at random position
        context.strokeRect(Math.random() * width * 0.8, // x position of center
                Math.random() * height * 0.8, // y position of center
                Math.random() * 30 + 10, Math.random() * 30 + 10); // width and height location
    }
    if (keycode === 71) {
        //g
        //create new Circle at random position
        context.beginPath();
        //draw a circle
        context.arc(Math.random() * width * 0.8, // x position of center
                Math.random() * height * 0.8, // y position of center
                Math.random() * 30 + 10, 0, Math.PI * 2, true); // radius
        context.closePath();
        context.stroke();
    }
}