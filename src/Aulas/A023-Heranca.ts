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

    constructor(
        name: string,
        nick: string,
        age: number,
        cpf: string,
        private room: string
    ) {
        super(name, nick, age, cpf);
    }

    getFullName(): string {
        return super.getFullName();
    }
}
export class Client extends Person {
    getFullName(): string {
        return `Client: ${this.name} ${this.nick}`;
    }
}

const per = new Person('Nergal', '666', 54, '12345678901');
const std = new Student('Gil', 'Miranda', 23, '12345678901', 'A');
const cli = new Client('Maria', 'Miranda', 21, '4658587900');

console.log(std);
console.log(cli.getFullName())