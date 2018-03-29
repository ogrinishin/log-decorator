/**
 * Log to console what instance is created
 * @param target
 */
export function logClass(target: any) {
    console.log(`%cInstance of class %c${target.name}%c has been created.\n`, 'font-style: italic', 'font-style: normal; font-weight: bold; color: green; font-size: 15px', 'font-style: italic');
}