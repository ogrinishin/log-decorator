"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Log to console name of method, value and type of each parameter and returned value with its type
 * @param target
 * @param {string} propertyName
 * @param {PropertyDescriptor} descriptor
 */
function logMethod(target, propertyName, descriptor) {
    var oldT = target;
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = arguments;
        var returnValue = originalMethod.apply(this, arguments);
        var stringArgsArray = Array.prototype.map.call(args, function (arg) { return "%c" + JSON.stringify(arg) + "%c: \"" + typeof arg + "\"%c"; });
        var stringArgs = stringArgsArray.join(', ');
        var stylesArray = [];
        for (var i = 0, max = stringArgsArray.length * 3; i < max; i++) {
            switch (i % 3) {
                case 0: {
                    stylesArray.push('font-style: normal; font-weight: bold; color: blue; font-size: 12px');
                    break;
                }
                case 1: {
                    stylesArray.push('font-style: italic;');
                    break;
                }
                case 2: {
                    stylesArray.push('font-style: normal; color: black; font-weight: normal');
                    break;
                }
            }
        }
        if (typeof returnValue == 'undefined') {
            returnValue = 'void';
        }
        else {
            returnValue = "%c" + JSON.stringify(returnValue) + "%c: \"" + (Array.isArray(returnValue) ? 'Array' : typeof returnValue) + "\"";
        }
        console.log.apply(null, ["method %c" + propertyName + "%c = (" + stringArgs + ") => " + returnValue, 'color: red; font-size: 14px', 'color: black;'].concat(stylesArray, ['font-style: normal; font-weight: bold; color: green; font-size: 12px', 'font-style: italic;']));
        return returnValue;
    };
}
exports.logMethod = logMethod;
