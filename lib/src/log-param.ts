/**
 * Log to console name of parent class of mathod, also method name and number of arguments order
 * @param target
 * @param {string} key
 * @param {number} index
 */
export function logParam(target: any, key: string, index: number) {
    if (index > 5) {
        console.log('Are you crazy to use so many parameters???', 'color: red, font-size: 30px')
    }
    let getNumber = (index: number) => {
        const numberByOrder: number = index + 1;
        let suff: string = numberByOrder == 1 ? 'st' : numberByOrder == 2 ? 'nd' : numberByOrder == 3 ? 'd' : 'th';

        return `${numberByOrder}%c${suff}%c`
    };

    const data = `%cclass %c${target.constructor.name ? target.constructor.name : target.prototype.name}%c, method %c${key}%c, ${getNumber(index)} param`;
    const styles = [
        'font-style: italic', 'font-style: normal; font-weight: bold; color: green; font-size: 15px',
        'font-style: italic', 'font-style: normal; font-weight: normal; color: red; font-size: 15px',
        '',
        'font-style: italic; font-size: 8px', 'font-style: normal',
    ];
    console.log.apply(null, [data, ...styles])
}