
function tabuada(){
   let num = document.getElementById('txtn')
   let tab = document.getElementById('seltab')
   if (num.value.length == 0){window.alert('Por favor, digite um número!')}
  else{
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = 0
    //Para limpar antes de colocar a próxima tabuada
    while (c <= 10){
        let item = document.createElement('option')
        //cria essa variável para add um elementto no javascript e poder usar ele
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        //em outras linguagens precisa para saber o item selecionado
        tab.appendChild(item)
        c++
    }

}

}
