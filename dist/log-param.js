"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Log to console name of parent class of mathod, also method name and number of arguments order
 * @param target
 * @param {string} key
 * @param {number} index
 */
function logParam(target, key, index) {
    if (index > 5) {
        console.log('Are you crazy to use so many parameters???', 'color: red, font-size: 30px');
    }
    var getNumber = function (index) {
        var numberByOrder = index + 1;
        var suff = numberByOrder == 1 ? 'st' : numberByOrder == 2 ? 'nd' : numberByOrder == 3 ? 'd' : 'th';
        return numberByOrder + "%c" + suff + "%c";
    };
    var data = "%cclass %c" + (target.constructor.name ? target.constructor.name : target.prototype.name) + "%c, method %c" + key + "%c, " + getNumber(index) + " param";
    var styles = [
        'font-style: italic', 'font-style: normal; font-weight: bold; color: green; font-size: 15px',
        'font-style: italic', 'font-style: normal; font-weight: normal; color: red; font-size: 15px',
        '',
        'font-style: italic; font-size: 8px', 'font-style: normal',
    ];
    console.log.apply(null, [data].concat(styles));
}
exports.logParam = logParam;
