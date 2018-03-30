"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log_class_1 = require("./log-class");
var log_method_1 = require("./log-method");
var log_param_1 = require("./log-param");
/**
 * Check automatically if @log decorator can define the case
 */
function defaultLog() {
    var args = arguments;
    if (args.length === 1) {
        log_class_1.logClass.apply(null, args);
        return;
    }
    if (args[2] || args[2] === 0) {
        switch (typeof args[2]) {
            case 'object': {
                log_method_1.logMethod.apply(null, args);
                return;
            }
            default: {
                log_param_1.logParam.apply(null, args);
                return;
            }
        }
    }
    throw new Error('Somithing went wrong with package \'ts-log-decorator\', try to specify the type');
}
exports.defaultLog = defaultLog;
