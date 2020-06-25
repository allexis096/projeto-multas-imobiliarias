function teste () {
    let alug = Number(document.getElementById('aluguel').value)
    let mes = Number(document.getElementById('meses').value)
    let res = document.getElementById('resultado')

    let multa3x = alug * 3
    let resTot1 = multa3x / 36
    let resTot2 = resTot1 * (36 - mes)

    if ((alug.length == 0) || (mes == 0)) {
        alert('Você não preencheu os dados direito.')
    } else if (mes >= 12) {
        resTot2 = `<strong>Não tem multa. \u{1F44D}</strong>`
        res.innerHTML = resTot2
    } else {
        res.innerHTML = `Multa de <strong>R$ ${resTot2.toFixed(2)} \u{1F44D}</strong>`
    }

    /*if (mes >= 12) {
        resTot2 = `Não tem multa.`
        res.innerHTML = resTot2
    } else {
        res.innerHTML = `Multa de R$ ${resTot2.toFixed(2)}`
    }*/
}