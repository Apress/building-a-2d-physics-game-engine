/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*jslint node: true, vars: true, evil: true, bitwise: true */
"use strict";

/* global mAllObjects, dt, gEngine */

function RigidShape(center, mass, friction, restitution) {

    this.mCenter = center;
    //angle
    this.mAngle = 0;
    this.mBoundRadius = 0;
    gEngine.Core.mAllObjects.push(this);
}

RigidShape.prototype.update = function () {

};

RigidShape.prototype.boundTest = function (otherShape) {
    var vFrom1to2 = otherShape.mCenter.subtract(this.mCenter);
    var rSum = this.mBoundRadius + otherShape.mBoundRadius;
    var dist = vFrom1to2.length();
    if (dist > rSum) {
        //not overlapping
        return false;
    }
    return true;
};
