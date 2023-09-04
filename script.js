function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //  res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked) {
            genero = 'Homem'
              if  (idade >= 0 && idade < 10) {
                //criança
                  img.setAttribute('src', 'foto-crianca-m.png')
            } else if (idade < 21) {
                //jovem
                  img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //adulto
                  img.setAttribute('src', 'foto-homem-m.png')
            } else {
                //idoso
                  img.setAttribute('src', 'foto-idoso-m.png')
            }
        
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-crianca-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-mulher-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idosa-f.png')
            }
        }
        res.style.textAling = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
