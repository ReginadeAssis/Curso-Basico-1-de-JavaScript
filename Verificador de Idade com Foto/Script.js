function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
// para ver se funcionou window.alert('FUNCIONOU')
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano) {
     window.alert ('[ERRO]Verifique os dados e tente novamente')   
    } else { var fsex = document.getElementsByName ('radsex')
    var idade = ano - Number(fano.value)
    res.innerHTML = `Idade calculada: ${idade}`
    //Linha acima calcula a idade digitada
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id' , 'foto')
    if (fsex[0].checked) { 
        genero = 'Homem'
        if (idade >=0 && idade < 10) {img.setAttribute('src','menino1.jpg')
            //Criança
        } else if (idade < 21) {img.setAttribute('src','adulto1.png')
            //Jovem 
        } else if (idade < 50) { img.setAttribute('src','adulto1.png')
            //Adulto
        } else { img.setAttribute('src','idoso1.jpg')
            //Idoso}

        }
    
    } else { genero = 'Mulher'
    if (idade >=0 && idade < 10) {img.setAttribute('src','menina1.png')
        //Criança
    } else if (idade < 21) {img.setAttribute('src','menina1.png')
        //Jovem 
    } else if (idade < 50) { img.setAttribute('src','adulta1.jpg')
        //Adulto
    } else {img.setAttribute('src','idosa1.jpg')
        //Idoso}

    }


}
        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    }

        
        
        //window.alert('Tudo ok!')para ver se tava dando certo o else ..vai colocando e testando..
}