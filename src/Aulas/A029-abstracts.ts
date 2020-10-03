export abstract class Personagem {

    protected abstract emoji: string;

    constructor(
        protected name: string, 
        protected ataque: number, 
        protected vida: number,
    ) {}

    atacar(personagem: Personagem): void {
        this.bordao();
        personagem.perderVida(this.ataque);
    }

    perderVida(forcaAtaque: number): void {
        this.vida -= forcaAtaque;
        console.log(`${this.name} agora tem ${this.vida}`)
    }

    abstract bordao(): void;
}

export class Guerreira extends Personagem {
    protected emoji = '\u{1F9DD}';
    bordao(): void {
        console.log(this.emoji + ' VINGADORES AVANTE!!!')
    }
}
export class Monstro extends Personagem {
    protected emoji = '\u{1F9DF}';
    bordao(): void {
        console.log(this.emoji + ' AAAARGH!!!')
    }
}

const guerreira = new Guerreira('Zelda', 100, 1000);
const monstro = new Monstro('Ganon', 87, 900);

guerreira.atacar(monstro);
monstro.atacar(guerreira);