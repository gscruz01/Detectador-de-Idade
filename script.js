var calcular = document.getElementById('calcular')
var img = document.getElementById('img')
var check1 = document.getElementById('check1')
var check2 = document.getElementById('check2')
calcular.addEventListener('click', subitrair)
function subitrair() {
    var anoDeNacimento = document.getElementById('anoDeNacimento')
    var ano = Number(anoDeNacimento.value)
    var idade = 2024 - ano
    var msg = document.getElementById('msg')
    // Esperma
    if (idade <= 1 && idade >= -5) {
        msg.innerText = `Possivelmente voçê ainda não nasceu`
        img.src = 'Midia/Esperma.png'
        document.body.style.background = 'Black'
    }
    // Error
    else {
        msg.innerText = `Algo de errado não esta certo`
        img.src = 'Midia/fotoerror.png'
        document.body.style.background = 'Gray'
    }
    // Bebe 
    if (idade >= 1 && idade <= 5) {
        // Masculino
        if (check1.checked) {
            msg.innerText = `Temos um Bebezinho de ${idade} anos.`
            img.src = 'Midia/BebeMasculino.png'
            document.body.style.background = 'rgb(123, 211, 234)'
        }
        // Feminino
        else if (check2.checked) {
            msg.innerText = `Temos uma Bebezinha de ${idade} anos.`
            img.src = 'Midia/BebeFeminino.png'
            document.body.style.background = 'rgb(255, 197, 197)'
        }
        // Error
        else {
            msg.innerText = `Algo de errado não esta certo`
            img.src = 'Midia/fotoerror.png'
            document.body.style.background = 'Gray'
        }
    }
    // Criança
    else if (idade >= 6 && idade <= 10) {
        // Masculino
        if (check1.checked) {
            msg.innerText = `Temos um Menininho de ${idade} anos.`
            img.src = 'Midia/CriançaMasculino.png'
            document.body.style.background = 'rgb(123, 211, 234)'
        }
        // Feminino
        else if (check2.checked) {
            msg.innerText = `Temos uma Menininha de ${idade} anos.`
            img.src = 'Midia/CriançaFeminina.png'
            document.body.style.background = 'rgb(255, 197, 197)'
        }
        // Error
        else {
            msg.innerText = `Algo de errado não esta certo`
            img.src = 'Midia/fotoerror.png'
            document.body.style.background = 'Gray'
        }
    }
    // Pre Adolecente
    else if (idade >= 11 && idade <= 16) {
        // Masculino
        if (check1.checked) {
            msg.innerText = `Temos um Garoto de ${idade} anos.`
            img.src = 'Midia/Pré-adolecenteMasculino.png'
            document.body.style.background = 'rgb(123, 211, 234)'
        }
        // Feminino
        else if (check2.checked) {
            msg.innerText = `Temos uma Garota de ${idade} anos.`
            img.src = 'Midia/Pré-adolecenteFeminino.png'
            document.body.style.background = 'rgb(255, 197, 197)'
        }
        // Error
        else {
            msg.innerText = `Algo de errado não esta certo`
            img.src = 'Midia/fotoerror.png'
            document.body.style.background = 'Gray'
        }
    }
    // Jovem
    else if (idade >= 17 && idade <= 21) {
        // Masculino
        if (check1.checked) {
            msg.innerText = `Temos um Jovem de ${idade} anos.`
            img.src = 'Midia/JovemMasculino.jpeg'
            document.body.style.background = 'rgb(123, 211, 234)'
        }
        // Feminino
        else if (check2.checked) {
            msg.innerText = `Temos uma Jovem de ${idade} anos.`
            img.src = 'Midia/JovemFeminino.jpeg'
            document.body.style.background = 'rgb(255, 197, 197)'
        }
        // Error
        else {
            msg.innerText = `Algo de errado não esta certo`
            img.src = 'Midia/fotoerror.png'
            document.body.style.background = 'Gray'
        }
    }
    // Adulto
    else if (idade >= 22 && idade <= 59) {
        // Masculino
        if (check1.checked) {
            msg.innerText = `Temos um Adulto de ${idade} anos.`
            img.src = 'Midia/AdultoMasculino.png'
            document.body.style.background = 'rgb(123, 211, 234)'
        }
        // Feminino
        else if (check2.checked) {
            msg.innerText = `Temos uma Adulta de ${idade} anos.`
            img.src = 'Midia/AdultaFeminino.png'
            document.body.style.background = 'rgb(255, 197, 197)'
        }
        // Error
        else {
            msg.innerText = `Algo de errado não esta certo`
            img.src = 'Midia/fotoerror.png'
            document.body.style.background = 'Gray'
        }
    }
    // Idoso
    else if (idade >= 60 && idade <= 105) {
        // Masculino
        if (check1.checked) {
            msg.innerText = `Temos um Idoso de ${idade} anos.`
            img.src = 'Midia/SenhorMasculino.png'
            document.body.style.background = 'rgb(123, 211, 234)'
        }
        // Feminino
        else if (check2.checked) {
            msg.innerText = `Temos uma Senhora de ${idade} anos.`
            img.src = 'Midia/SenhoraFeminino.png'
            document.body.style.background = 'rgb(255, 197, 197)'
        }
        // Error
        else {
            msg.innerText = `Algo de errado não esta certo`
            img.src = 'Midia/fotoerror.png'
            document.body.style.background = 'Gray'
        }
    }
    // Morto
    else if (idade >= 106) {
        msg.innerText = `Possivelmente você não esta mais vivo`
        img.src = 'Midia/Caveira.jpg'
        document.body.style.background = 'Black'
    }
    else {
        msg.innerText = `Algo de errado não esta certo`
        img.src = 'Midia/fotoerror.png'
        document.body.style.background = 'Gray'
    }
}
