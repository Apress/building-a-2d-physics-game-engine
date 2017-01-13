/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global height, width, gEngine */

/*jslint node: true, vars: true, evil: true, bitwise: true */
"use strict";
function MyGame() {
    var width = gEngine.Core.mWidth;
    var height = gEngine.Core.mHeight;

    var up = new Rectangle(new Vec2(width / 2, 0), width, 3);
    var down = new Rectangle(new Vec2(width / 2, height), width, 3);
    var left = new Rectangle(new Vec2(0, height / 2), 3, height);
    var right = new Rectangle(new Vec2(width, height / 2), 3, height);
}


