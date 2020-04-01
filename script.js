function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.png'
        document.body.style.background = '#fee357'

    }else if (hora <= 18) {
        img.src = 'img/tarde.png'
        document.body.style.background = '#e18d50'

    }else {
        img.src = 'img/noite.png'
        document.body.style.background = '#736863'

    }
}