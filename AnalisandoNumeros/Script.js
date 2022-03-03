let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
//esse é o vetor vazio para analisar os dados

function isNumero (n) {
if(Number(n) >= 1 && Number(n) <= 100) {
    return true
} else {
    return false
}
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar () {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
         valores.push(Number(num.value))
      //valor dentro de num vai ser avaliado para ver se é número
      //valores.push add nalista mas não aparece ai vc cria um option para add no select
        let item = document.createElement('option')
        //abaixo tem string com possibilidade de interpolação 
        item.text = `Valor ${num.value} adicionado`
        //para add na lista o código abaixo
        lista.appendChild(item)
        res.innerHTML = ' '
        //faz isso para esvaziar dps que vc digitou elemento e tinha finalizado
    } else {
         window.alert('Valor inválido ou na lista!')
        } 
        //para apagar automaticamente o campo preenchido cod abaixo
        num.value = ' '
        num.focus()
}
   
function finalizar() {
//if para ver se valores está vazio
if (valores.lenght == 0) {
    window.alert('Adicione valores antes de finalizar!')
} else { 
    let tot = valores.length
//criou essa variável para jogar no programa
    let maior = valores[0]
    let menor = valores[0]
    //se não tem nada o maior ou menor é a unica coisa que tem
    let soma = 0
    let media = 0

    for(let pos in valores) {
        soma += valores[pos]
        if(valores[pos] > maior) 
        maior = valores[pos]
        if(valores[pos] < menor)
        menor = valores[pos] 
    }
    media = soma/tot
    res.innerHTML = ' '
    res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
    // vai colocar o res que criou para poder trabalhar aqui
    res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
    res.innerHTML += `<p> O menor valor informado foi ${menor}. <p/>`
    res.innerHTML += `<p> Somando todos os valores, temos ${soma}.<p/>`
    res.innerHTML += `<p> A média dos valores digitados é ${media}. <p/>`
}

}
        
     

