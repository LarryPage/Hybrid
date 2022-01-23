/**
 * Created by 李香成 on 2021/1/18.
 */
__functionIndexMap = {};

function callAndroidFunction(namespace, functionName, args, callback) {
    var wrap = {
        "method": functionName,
        "params": args
    };
    if (callback) {
        var callbackFuncName;
        if (typeof callback == 'function') {
            callbackFuncName = createCallbackFunction(functionName + "_" + "callback", callback);
        } else {
            callbackFuncName = callback;
        }
		
        wrap["callback"] = callbackFuncName
    }
    prompt(JSON.stringify(wrap));
}

function createCallbackFunction(funcName, callbackFunc) {
    if (callbackFunc && callbackFunc.name != null && callbackFunc.name.length > 0) {
        return callbackFunc.name;
    }

    if (typeof window[funcName + 0] != 'function') {
        window[funcName + 0] = callbackFunc;
        __functionIndexMap[funcName] = 0;
        return funcName + 0
    } else {
        var maxIndex = __functionIndexMap[funcName];
        var newIndex = ++maxIndex;
        window[funcName + newIndex] = callbackFunc;
        return funcName + newIndex;
    }
}


var DYL = {};

//******************Hybrid方法******************//
//****************1.页面跳转的控制****************//
DYL.pushWebView = function (params) {
    callAndroidFunction("DYL", "pushWebView", params, null);
};

DYL.popWebView = function (params) {
    callAndroidFunction("DYL", "popWebView", params, null);
};

DYL.backWebView = function (params) {
    callAndroidFunction("DYL", "backWebView", null, null);
};
//****************2.功能性接口*******************//
DYL.setWebViewTag = function (params) {
    callAndroidFunction("DYL", "setWebViewTag", params, null);
};

DYL.checkWebView = function (params,callBackName) {
    callAndroidFunction("DYL", "checkWebView", params, callBackName);
};

DYL.setBounces = function (params) {
    callAndroidFunction("DYL", "setBounces", params, null);
};

DYL.getUserInfo = function (callBackName) {
    callAndroidFunction("DYL", "getUserInfo", null, callBackName);
};

DYL.getTokenInfo = function (callBackName) {
    callAndroidFunction("DYL", "getTokenInfo", null, callBackName);
};

DYL.getClickActiveInfo = function (callBackName) {
    callAndroidFunction("DYL", "getClickActiveInfo", null, callBackName);
};

DYL.showLogin = function () {
    callAndroidFunction("DYL", "showLogin", null, null);
};

DYL.execApiRequest = function (params,callBackName) {
    callAndroidFunction("DYL", "execApiRequest", params, callBackName);
};
//****************3.cache相关*******************//
DYL.writeCache = function (params) {
    callAndroidFunction("DYL", "writeCache", params, null);
};

DYL.readCache = function (params,callBackName) {
    callAndroidFunction("DYL", "readCache", params, callBackName);
};

DYL.removeCache = function (params) {
    callAndroidFunction("DYL", "removeCache", params, null);
};

DYL.removeAllCache = function () {
    callAndroidFunction("DYL", "removeAllCache", null, null);
};
//****************4.Session相关*******************//
DYL.writeSession = function (params) {
    callAndroidFunction("DYL", "writeSession", params, null);
};

DYL.readSession = function (params,callBackName) {
    callAndroidFunction("DYL", "readSession", params, callBackName);
};

DYL.removeSession = function (params) {
    callAndroidFunction("DYL", "removeSession", params, null);
};

DYL.removeAllSession = function () {
    callAndroidFunction("DYL", "removeAllSession", null, null);
};
//****************5.上导航 Title Bar*****************//
DYL.showTitleBar = function (params) {
    callAndroidFunction("DYL", "showTitleBar", params, null);
};

DYL.setTitleBar = function (params) {
    callAndroidFunction("DYL", "setTitleBar", params, null);
};

DYL.setLeftButton = function (params) {
    callAndroidFunction("DYL", "setLeftButton", params, null);
};

DYL.setRightButton = function (params) {
    callAndroidFunction("DYL", "setRightButton", params, null);
};

DYL.setRightButtonShare = function (params) {
    callAndroidFunction("DYL", "setRightButtonShare", params, null);
};
//********************************************//

window["DYL"] = DYL;