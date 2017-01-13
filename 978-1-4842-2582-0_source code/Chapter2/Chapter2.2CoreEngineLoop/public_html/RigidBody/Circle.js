/* 
 * File:Circle.js
 *      define a circle
 *     
 */
/*jslint node: true, vars: true, evil: true, bitwise: true */
"use strict";



/* global RigidShape */

var Circle = function (center, radius, fix) {
    RigidShape.call(this, center);
    this.mType = "Circle";

    this.mRadius = radius;
    this.mFix = fix;
    //The start point of line in circle
    this.mStartpoint = new Vec2(center.x, center.y - radius);

};

var prototype = Object.create(RigidShape.prototype);
prototype.constructor = Circle;
Circle.prototype = prototype;


Circle.prototype.move = function (s) {
    this.mStartpoint = this.mStartpoint.add(s);
    this.mCenter = this.mCenter.add(s);
    return this;
};

Circle.prototype.draw = function (context) {

    context.beginPath();

    //draw a circle
    context.arc(this.mCenter.x, this.mCenter.y, this.mRadius, 0, Math.PI * 2, true);

    //draw a line from start point toward center
    context.moveTo(this.mStartpoint.x, this.mStartpoint.y);
    context.lineTo(this.mCenter.x, this.mCenter.y);

    context.closePath();
    context.stroke();
};

//rotate angle in counterclockwise
Circle.prototype.rotate = function (angle) {
    this.mAngle += angle;
    this.mStartpoint = this.mStartpoint.rotate(this.mCenter, angle);
    return this;
};
