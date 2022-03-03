
//Recursividade é quando uma função chama a outra
function fatorial(n) {
if(n == 1) {
    return 1} else {
        return n * fatorial(n-1)
    }

}
console.log(fatorial (5))


