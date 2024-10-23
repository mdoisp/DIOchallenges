const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite seu nome: ", function(heroName) {
    rl.question("Quantidade de XP: ", function(heroXp) {
        let heroXpNumber = parseInt(heroXp);
        switch (true) {
            case heroXpNumber > 0 && heroXpNumber <= 1000:
                console.log(`O herói ${heroName} está no nível FERRO`);
                break;
            case heroXpNumber > 1000 && heroXpNumber <= 2000:
                console.log(`O herói ${heroName} está no nível BRONZE`);
                break;
            case heroXpNumber > 2000 && heroXpNumber <= 5000:
                console.log(`O herói ${heroName} está no nível PRATA`);
                break;
            case heroXpNumber > 5000 && heroXpNumber <= 7000:
                console.log(`O herói ${heroName} está no nível OURO`);
                break;
            case heroXpNumber > 7000 && heroXpNumber <= 8000:
                console.log(`O herói ${heroName} está no nível PLATINA`);
                break;
            case heroXpNumber > 8000 && heroXpNumber <= 9000:
                console.log(`O herói ${heroName} está no nível ASCENDENTE`);
                break;
            case heroXpNumber > 9000 && heroXpNumber <= 10000:
                console.log(`O herói ${heroName} está no nível IMORTAL`);
                break;
            case heroXpNumber > 10000:
                console.log(`O herói ${heroName} está no nível RADIANTE`);
                break;
            case heroXpNumber < 0:
                console.log("A experiência não pode ser menor que 0");
                break;
            default:
                console.log("XP inválido, coloque apenas números");
        }
        rl.close();
    });
});
