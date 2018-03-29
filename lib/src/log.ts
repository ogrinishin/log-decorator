import {logClass} from "./log-class";
import {logParam} from "./log-param";
import {logMethod} from "./log-method";
import {defaultLog} from "./default";

/**
 * Calls defined logger
 *
 * @param {string} type  - optional
 * @returns {any}
 */
export function log(type?: string): any {
    switch (type) {
        case 'c':
        case 'class': {
            return logClass
        }
        case 'p':
        case 'param': {
            return logParam
        }
        case 'm':
        case 'method':
        case 'function':
        case 'f': {
            return logMethod
        }
        default: {
            return defaultLog
        }
    }
}