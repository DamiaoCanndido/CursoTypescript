export function multiArgs(...args: Array<number>): number {
    return args.reduce((ac, valor) => ac * valor, 1);
}

console.log(multiArgs(2, 3, 4))