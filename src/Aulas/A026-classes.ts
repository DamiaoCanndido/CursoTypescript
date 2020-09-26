export class Empresa {
    public readonly name: string;
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }

    public addColab(colab: Colaborador): void {
        this.colaboradores.push(colab);
    }

    public showColabs(): void {
        for (const colaboradores of this.colaboradores) {
            console.log(colaboradores);
        }
    }
}

export class Colaborador {
    constructor(
        public readonly name: string, 
        public readonly sobrenome: string
    ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colab1 = new Colaborador('Damiao', 'Candido');
const colab2 = new Colaborador('Fran', 'Silva');

empresa1.addColab(colab1);
empresa1.addColab(colab2);

empresa1.showColabs();