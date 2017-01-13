/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*jslint node: true, vars: true, evil: true, bitwise: true */
"use strict";

/* global mAllObjects, dt, gEngine */

function RigidShape(center) {
    this.mCenter = center;
    //angle
    this.mAngle = 0;
    gEngine.Core.mAllObjects.push(this);
}

RigidShape.prototype.update = function () {
    if (this.mCenter.y < gEngine.Core.mHeight && this.mFix !== 0) {
        this.move(new Vec2(0, 1));
    }
};
