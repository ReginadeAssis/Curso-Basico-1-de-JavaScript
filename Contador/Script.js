
function contar() {
   let ini = document.getElementById("t1")
   let fim = document.getElementById("t2")
   let passo = document.getElementById("tp")
   let res = document.getElementById("Res")

   if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { 
   res.innerHTML = 'Impossível contar'
   window.alert('Erro! Faltam dados')
} else {
    res.innerHTML = 'Contando...<br>'
    //<br pula linha>
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if(p <= 0) {
        window.alert('Passo inválido Considerando PASSO 1!')
        p = 1
    }
    if(i < f) {
        //contagem crescente
        for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
    } 
    res.innerHTML += `\u{1F3C1}`
 } else { 
     //contagem decrescente
        for(let c = i; c >= f; c -= p) {
            res.innerHTML += `  ${c} \u{1F449} `
            //dedos no meio
        }
        res.innerHTML += `\u{1F3C1}`
        //bandeira no fim
     }
       
     
     //poderia ser o while ou do while começa no inicio enquanto menor ou igual ao fim o contador recebe ele mesmo mais o passo
   //Formatação da carinha foi de U+1F603
    }
}









// var ini = let ini a diferença é que no let a variável só vale dentro do bloco