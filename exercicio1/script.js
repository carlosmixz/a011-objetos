let sacolao = []

let Objeto = {
    nome: "",
    preco: 0,
    disponibilidade: false
}

let banana = {...Objeto}
banana.nome = "Banana"
banana.preco = 2.50
banana.disponibilidade = true

let laranja = {...Objeto}
laranja.nome = "Laranja"
laranja.preco = 3.50
laranja.disponibilidade = true

let uva = {...Objeto}
uva.nome = "Uva"
uva.preco = 4.50
uva.disponibilidade = false

sacolao.push(banana, laranja, uva)
console.log(sacolao)