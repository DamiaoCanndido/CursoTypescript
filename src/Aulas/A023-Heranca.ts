export class Person {

    constructor(
        public name: string,
        public nick: string,
        private age: number,
        protected cpf: string
    ) { }

    getFullName(): string {
        return `${this.name} ${this.nick}`;
    }

    getAge(): number {
        return this.age;
    }

    getCPF(): string {
        return this.cpf;
    }
}

export class Student extends Person {
    getFullName(): string {
        return `Student: ${this.name} ${this.nick}`;
    }
}
export class Client extends Person {
    getFullName(): string {
        return `Client: ${this.name} ${this.nick}`;
    }
}

const std = new Student('Gil', 'Miranda', 23, '12345678901');
const cli = new Client('Maria', 'Miranda', 21, '4658587900');

console.log(std.getFullName())
console.log(cli.getFullName())