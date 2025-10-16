import "reflect-metadata";

export function sealed(constructor: Function) {
  console.log("Sealed telah diterapkan");

  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

export function logMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`🚀 Memanggil method: ${propertyKey}`);
    console.log(`Dengan argumen: ${JSON.stringify(args)}`);

    const result = originalMethod.apply(this, args);

    console.log(`✅ Selesai, hasilnya adalah : ${JSON.stringify(result)}`);

    return result;
  };

  return descriptor;
}

export function format(formatString: string) {
  return function (target: any, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newValue: string) {
      if (formatString === "uppercase") {
        value = newValue.toUpperCase();
      } else {
        value = newValue.toLowerCase();
      }
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

export function required(target: any, propertyKey: string, parameterIndex: number) {
  const existingRequiredParameters: number[] = Reflect.getOwnMetadata("required", target, propertyKey) || [];
  
  existingRequiredParameters.push(parameterIndex);

  Reflect.defineMetadata("required", existingRequiredParameters, target, propertyKey);
}

export function validateParams(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    const requiredParameters: number[] = Reflect.getOwnMetadata("required", target, propertyKey);
    
    if (requiredParameters) {
      for (const parameterIndex of requiredParameters) {
        if (parameterIndex >= args.length || args[parameterIndex] === undefined) {
          throw new Error(`Argumen pada posisi ${parameterIndex} di method '${propertyKey}' wajib diisi.`);
        }
      }
    }

    return originalMethod.apply(this, args);
  };

  return descriptor;
}