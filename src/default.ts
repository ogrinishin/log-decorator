import {logClass} from "./log-class";
import {logMethod} from "./log-method";
import {logParam} from "./log-param";

/**
 * Check automatically if @log decorator can define the case
 */
export function defaultLog() {
    const args = arguments;
    if (args.length === 1) {
        logClass.apply(null, args);
        return;
    }
    if (args[2] || args[2] === 0){
        switch (typeof args[2]) {
            case 'object' : {
                logMethod.apply(null, args);
                return
            }
            default: {
                logParam.apply(null, args);
                return
            }
        }
    }
    throw new Error('Somithing went wrong with package \'ts-log-decorator\', try to specify the type')
}