let mensagens = [
    `Obrigado por ser essa mulher incrível, por sempre fazer de tudo por nós.
Só tenho que agradecer por sempre estar comigo.
Te amo muito meu amor ❤️`
]

function surpresa() {
    let m = mensagens[Math.floor(Math.random() * mensagens.length)]
    document.getElementById("msg").innerHTML = m
}