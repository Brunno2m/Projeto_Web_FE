export class Mensageiro{
    name: string;
    email: string;
    mensagem: string

    constructor(mensageiro : IMensageiro){
        this.email = mensageiro.email;
        this.name = mensageiro.name;
        this.mensagem = mensageiro.mensagem
    }

}

interface IMensageiro{
    name: string;
    email: string;
    mensagem:string;
}