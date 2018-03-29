export function logMethod(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    target;
    propertyName;
    let originalMethod = descriptor.value;
    console.log(descriptor);
    descriptor.value = function () {
        const args = arguments;
        let returnValue = originalMethod.apply(this, args);
        console.log(`${JSON.stringify(args)} => ${typeof returnValue != 'undefined' ? returnValue : 'void'}`);
        return returnValue;
    }
}