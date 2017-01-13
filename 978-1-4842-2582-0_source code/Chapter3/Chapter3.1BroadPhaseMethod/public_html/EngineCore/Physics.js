/*
 The following is not free software. You may use it for educational purposes, but you may not redistribute or use it commercially.
 (C) Burak Kanber 2012
 */
/*jslint node: true, vars: true, evil: true, bitwise: true */
"use strict";
/* global objectNum, context, mRelaxationCount, mAllObjects, mPosCorrectionRate */


var gEngine = gEngine || {};
// initialize the variable while ensuring it is not redefined

gEngine.Physics = (function () {
    var collision = function () {
        var i, j;
        //specifically, i start from 5
        for (i = 5; i < gEngine.Core.mAllObjects.length; i++) {
            for (j = i + 1; j < gEngine.Core.mAllObjects.length; j++) {
                if (gEngine.Core.mAllObjects[i].boundTest(gEngine.Core.mAllObjects[j])) {
                    gEngine.Core.mContext.strokeStyle = 'green';
                    gEngine.Core.mAllObjects[i].draw(gEngine.Core.mContext);
                    gEngine.Core.mAllObjects[j].draw(gEngine.Core.mContext);
                }
            }
        }
    };
    var mPublic = {
        collision: collision
    };
    return mPublic;
}());

