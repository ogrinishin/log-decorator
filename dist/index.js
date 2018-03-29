"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logMethod(target, propertyName, descriptor) {
    target;
    propertyName;
    var originalMethod = descriptor.value;
    console.log(descriptor);
    descriptor.value = function () {
        var args = arguments;
        var returnValue = originalMethod.apply(this, args);
        console.log(JSON.stringify(args) + " => " + (typeof returnValue != 'undefined' ? returnValue : 'void'));
        return returnValue;
    };
}
exports.logMethod = logMethod;
