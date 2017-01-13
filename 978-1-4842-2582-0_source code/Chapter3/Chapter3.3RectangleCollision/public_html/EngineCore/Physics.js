/*
 The following is not free software. You may use it for educational purposes, but you may not redistribute or use it commercially.
 (C) Burak Kanber 2012
 */
/* global objectNum, context, mRelaxationCount, mAllObjects, mPosCorrectionRate */
/*jslint node: true, vars: true, evil: true, bitwise: true */
"use strict";
var gEngine = gEngine || {};
// initialize the variable while ensuring it is not redefined

gEngine.Physics = (function () {
    var drawCollisionInfo = function (collisionInfo, context) {
        context.beginPath();
        context.moveTo(collisionInfo.mStart.x, collisionInfo.mStart.y);
        context.lineTo(collisionInfo.mEnd.x, collisionInfo.mEnd.y);
        context.closePath();
        context.strokeStyle = "orange";
        context.stroke();
    };
    var collision = function () {
        var i, j;
        var collisionInfo = new CollisionInfo();
        for (i = 0; i < gEngine.Core.mAllObjects.length; i++) {
            for (j = i + 1; j < gEngine.Core.mAllObjects.length; j++) {
                if (gEngine.Core.mAllObjects[i].boundTest(gEngine.Core.mAllObjects[j])) {
                    if (gEngine.Core.mAllObjects[i].collisionTest(gEngine.Core.mAllObjects[j], collisionInfo)) {
                        //make sure the normal is always from object[i] to object[j]
                        if (collisionInfo.getNormal().dot(gEngine.Core.mAllObjects[j].mCenter.subtract(gEngine.Core.mAllObjects[i].mCenter)) < 0) {
                            collisionInfo.changeDir();
                        }
                        //draw collision info (a black line that shows normal)
                        drawCollisionInfo(collisionInfo, gEngine.Core.mContext);
                    }
                }
            }
        }
    };

    var mPublic = {
        collision: collision
    };
    return mPublic;
}());

