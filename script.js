function iniciarRelogio() {
    atualizarRelogio();
    setInterval(atualizarRelogio, 1000);
}

function atualizarRelogio() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    let saudacao = ''

    if (hora >= 0 && hora < 12) {
        // Bom Dia!
        saudacao = 'Bom Dia!'
        img.src = 'imagem_manhã.jpg'
        document.body.style.background = 'rgba(228, 193, 128, 1)'
    } else if (hora >=12 && hora < 18) {
        // Boa Tarde!
        saudacao = 'Boa Tarde!'
        img.src = 'imagem_tarde.jpg'
        document.body.style.background = 'rgba(255, 124, 2, 1)'
    } else {
        // Boa Noite!
        saudacao = 'Boa Noite!'
        img.src = 'imagem_noite.jpg'
        document.body.style.background = 'rgba(23, 39, 129, 1)'
    }

    msg.innerHTML = `${saudacao} Agora são ${hora}:${minutos}:${segundos}.`
}