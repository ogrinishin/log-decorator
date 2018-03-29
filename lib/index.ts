export function logMethod(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    target;
    propertyName;
    let originalMethod = descriptor.value;
    console.log(descriptor);
    descriptor.value = function () {
        const args: any = arguments;
        let returnValue = originalMethod.apply(this, arguments);
        
        const stringArgs = Array.prototype.map(args, (arg: any) => {
            console.log(arg);
            return arg
        });

        console.log(`${JSON.stringify(args)} => ${typeof returnValue != 'undefined' ? returnValue : 'void'}`);
        return returnValue;
    }
}