let num = [5,8,2,9,3]
num.push(1)
//coloca acima da ordenação para ele add esse e organizar tbm
num.sort()
//ordena os elementos de forma crscente

console.log(`Nosso vetor é o ${num}`)

console.log(`O vetor tem ${num.length} posições`)
//mostra quantos elementos tem 

console.log(num[0])
//mostra o elemento na vaga 0

console.log(`O primeiro valor do vetor é ${num[0]}`)

//console.log(num[1])
//console.log(num[2])
//console.log(num[3])
//console.log(num[4])
//para não ter que escrever isso vc cria uma variável que vai contando

for(let pos = 0; pos<num.lenght ; pos ++ ) {console.log(num[pos])}

//basicamente diz que variável pós começa com 0 no bloco do teste lógico vc vai levar ela até 4
//enquanto menor que num.lenght
// faz pos ++ p/ kd looping

let pos = num.indexOf(8)
//Em que posição o 8 foi parar?
console.log(`O valor 8 está na posição ${pos}`)
num.sort()


//if(pos == -1) {console.log('O valor não foi encontrado")}
//else{ console.log(`O valor está na posição ${pos}`)}