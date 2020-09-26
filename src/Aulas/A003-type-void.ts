function noReturn (...args: Array<string>): void {
    console.log(args.join(' '));
}

noReturn('Damiao', 'Candido');