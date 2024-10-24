function calcularVD(){
    let name = document.getElementById('user').value;
    let win = document.getElementById('wins').value;
    let lose = document.getElementById('loses').value;
    let saldo = win - lose;
    switch(true){
        case saldo < 10:
            document.getElementById('respCalc').innerText = `${name} possui um saldo de ${saldo} vitória(s) e está no nível FERRO`
            break;
        case saldo >= 11 && saldo <= 20:
            document.getElementById('respCalc').innerText = `${name} possui um saldo de ${saldo} vitória(s) e está no nível BRONZE`
            break;
        case saldo >= 21 && saldo <= 50:
            document.getElementById('respCalc').innerText = `${name} possui um saldo de ${saldo} vitória(s) e está no nível PRATA`
            break;
        case saldo >= 51 && saldo <= 80:
            document.getElementById('respCalc').innerText = `${name} possui um saldo de ${saldo} vitória(s) e está no nível OURO`
            break;
        case saldo >= 81 && saldo <= 90:
            document.getElementById('respCalc').innerText = `${name} possui um saldo de ${saldo} vitória(s) e está no nível DIAMANTE`
            break;
        case saldo >= 91 && saldo <= 100:
            document.getElementById('respCalc').innerText = `${name} possui um saldo de ${saldo} vitória(s) e está no nível LENDÁRIO`
            break;
        case saldo > 100:
            document.getElementById('respCalc').innerText = `${name} possui um saldo de ${saldo} vitória(s) e está no nível IMORTAL`
            break;
    }

}