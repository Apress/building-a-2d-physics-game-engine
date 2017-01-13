/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*jslint node: true, vars: true, evil: true, bitwise: true */
"use strict";
/* global height, width, gEngine */
function MyGame() {
    var width = gEngine.Core.mWidth;
    var height = gEngine.Core.mHeight;
    var r1 = new Rectangle(new Vec2(width / 2, height / 2), 3, 3, 0);

    var up = new Rectangle(new Vec2(width / 2, 0), width, 3, 0);
    var down = new Rectangle(new Vec2(width / 2, height), width, 3, 0);
    var left = new Rectangle(new Vec2(0, height / 2), 3, height, 0);
    var right = new Rectangle(new Vec2(width, height / 2), 3, height, 0);
}


