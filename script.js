let mensagens = [
    `Obrigado por ser essa mulher incrível, por sempre fazer de tudo por nós.
Só tenho que agradecer por sempre estar comigo.
faz 1 ano que nós conhecemos e que também estamos juntos, foi o melhor ano que eu poderia ter, sempre agradecendo por ter você na minha vida, faço sempre o melhor que posso para te ver bem , e feliz.
Te amo muito meu amor ❤️.`
]

function surpresa() {
    let m = mensagens[Math.floor(Math.random() * mensagens.length)]
    document.getElementById("msg").innerHTML = m
}