/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*jslint node: true, vars: true, evil: true, bitwise: true */
/*global document */
/* global gObjectNum */
"use strict";  // Operate in Strict mode such that variables must be declared before used!
/**
 * Static refrence to gEngine
 * @type gEngine
 */
var gEngine = gEngine || {};
// initialize the variable while ensuring it is not redefined
gEngine.Core = (function () {
    var mCanvas, mContext, mWidth = 800, mHeight = 450;
    mCanvas = document.getElementById('canvas');
    mContext = mCanvas.getContext('2d');
    mCanvas.height = mHeight;
    mCanvas.width = mWidth;

    var mPublic = {
        mWidth: mWidth,
        mHeight: mHeight,
        mContext: mContext
    };
    return mPublic;
}());