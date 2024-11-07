class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        if(this.tipo === "Guerreiro"){
            return "atacou usando uma espada!"
        }else if(this.tipo === "Mago"){
            return "atacou usando magia!"
        }else if(this.tipo === "Monge"){
            return "atacou com um golpe marcial!"
        }else if(this.tipo === "Arqueiro"){
            return "atacou atirando uma flecha!"
        }else if(this.tipo === "Ninja"){
            return "atacou lançando uma shuriken!"
        }else{
            return "escolha uma classe"
        }
    }
}

function atacar(event){
    event.preventDefault();
    let nome = document.getElementById('hero').value
    let idade = document.getElementById('age').value
    let tipo = document.getElementById('classes').value

    let hero = new Heroi(nome, idade, tipo)
    let ataque = hero.atacar()

    document.getElementById('resp').innerText = `O herói ${hero.nome}, de ${idade} anos, ${ataque}`
}
