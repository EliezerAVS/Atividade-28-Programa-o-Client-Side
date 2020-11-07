let quantidade = 0;
let maior = 0;
let menor = 101;
let soma = 0;
let media = 0;
let adicionar = document.querySelector('#adicionar');
adicionar.addEventListener('click', exibirValores);
function exibirValores(){
    let num = Number(document.getElementById('num').value);
    if(num >= 1 && num <= 100){
        document.getElementById('valores').innerHTML += `Valor ${num} adicionado.\n`;
        document.getElementById('num').value = "";
        quantidade += 1;
        if(num > maior){
            maior = num;
        }
        if(num < menor){
            menor = num;
        }
        soma += num;
        media = soma / quantidade;
    }
    else{
        alert('Escolha número(s) entre 1 e 100!');
    }
}
let finalizar = document.getElementById('finalizar');
finalizar.addEventListener('click', exibir);
function exibir(){
    document.getElementById('valores').innerHTML = "";
    document.getElementById('quantidade').innerHTML = "Números cadastrados: ";
    document.getElementById('quantidade').innerHTML += quantidade;
    document.getElementById('maior').innerHTML = "O maior número é: ";
    document.getElementById('maior').innerHTML += maior;
    document.getElementById('menor').innerHTML = "O menor número é: ";
    document.getElementById('menor').innerHTML += menor;
    document.getElementById('soma').innerHTML = "A soma dos números é: ";
    document.getElementById('soma').innerHTML += soma;
    document.getElementById('media').innerHTML = "A média dos números é: ";
    document.getElementById('media').innerHTML += media;
    quantidade = 0;
    maior = 0;
    menor = 101;
    soma = 0;
    media = 0;
}