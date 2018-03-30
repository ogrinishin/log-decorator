"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log_class_1 = require("./log-class");
var log_param_1 = require("./log-param");
var log_method_1 = require("./log-method");
var default_1 = require("./default");
/**
 * Calls defined logger
 *
 * @param {string} type  - optional
 * @returns {any}
 */
function log(type) {
    switch (type) {
        case 'c':
        case 'class': {
            return log_class_1.logClass;
        }
        case 'p':
        case 'param': {
            return log_param_1.logParam;
        }
        case 'm':
        case 'method':
        case 'function':
        case 'f': {
            return log_method_1.logMethod;
        }
        default: {
            return default_1.defaultLog;
        }
    }
}
exports.log = log;
