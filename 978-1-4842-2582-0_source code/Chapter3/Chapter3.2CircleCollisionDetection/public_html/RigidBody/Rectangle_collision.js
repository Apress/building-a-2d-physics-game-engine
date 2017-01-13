/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*jslint node: true, vars: true, evil: true, bitwise: true */
"use strict";
/*global Rectangle, Vec2 */

Rectangle.prototype.collisionTest = function (otherShape, collisionInfo) {
    var status = false;
    if (otherShape.mType === "Circle") {
        status = false;
    } else {
        status = false;
    }
    return status;
};
