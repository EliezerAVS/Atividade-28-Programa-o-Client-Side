let gerarTabuada = document.getElementById('gerarTabuada');
gerarTabuada.addEventListener('click', tabuada);
function tabuada(){
    document.getElementById('valores').innerHTML = "";
    let num = Number(document.getElementById('num').value);
    let i = 0;
    while(i <= 10){
        let resultado = num * i;
        document.getElementById('valores').innerHTML += `${num} X ${i} = ${resultado}\n`;
        i++;
    }
    document.getElementById('num').value = "";
}