type Age = number;
type Person = {
    name: string;
    age: Age;
    salario: number;
    corPreferida?: string;
}
type CorRGB = 'Red' | 'Green' | 'Blue';
type CorCMYK = 'Ciano' | 'Magenta' | 'Yellow' | 'Black';

type corPreferida = CorRGB | CorCMYK;

const person: Person = {
    name: 'Damiao',
    age: 22,
    salario: 12345,
}

export function setColor(person: Person, color: corPreferida): Person {
    return { ...person, corPreferida: color }
}

console.log(setColor(person, 'Black'));