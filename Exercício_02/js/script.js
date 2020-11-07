let contar = document.getElementById('contar');
contar.addEventListener('click', contagem);
function contagem(){
    document.getElementById('exibir').innerHTML = "";
    let inicio = Number(document.getElementById('inicio').value);
    let fim = Number(document.getElementById('fim').value);
    let passo = Number(document.getElementById('passo').value);
    if(inicio == "" || fim == "" || passo == ""){
        alert("Campo(s) vazio(s)!!! Escolha um número!")
    }
    else if(inicio < fim){
        while(inicio <= fim){
            document.getElementById('exibir').innerHTML += `${inicio} `;
            inicio = inicio + passo;
        }
    }
    else{
        while(inicio >= fim){
            document.getElementById('exibir').innerHTML += `${inicio} `;
            inicio = inicio - passo;
        }
    }
}