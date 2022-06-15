const express = require('express');
const app = express();

const pessoas = [
    {
        nome: "Matheus",
        idade: 25
    },
    {
        nome: "Luana",
        idade: 30
    }
]

//Fica ouvindo o navegador , e quando bate na port 3000 vai jogar la pra dentro oque a gente quiser
//Server
app.listen('3000')

//middleware - ponte das requisições
//Transforma tudo oque esta chegando na API em JSON
app.use(express.json())

/*

//Rota GET
app.route('/pessoas').get((req, res) => res.send(pessoas))

//Rota Post
app.route('/').post((req, res) => res.send(req.body))


//Rota Put
let author = "Matheus"
//Só para mostrar como estava a requisição 'ANTES'
app.route('/').get((req, res) => res.send(author))

app.route('/').put((req, res) => {
    //Altera somente o valor da variável nao o JSON todo
    author = req.body.author
    res.send(author)
})

//Rota Delete
//Params toda variavel que vem da request URL
let dog = "Lilica"
app.route('/:id').delete((req, res) => {
    author = "";
    res.send(req.params.id)
})

*/

//Parâmetros nas requisições
/*app.route('/').post((req, res) => {
    const { nome, cidade, jogos_favoritos } = req.body;
    //res.send(`meu nome é ${nome} e minha cidade é ${cidade}`)
    res.send(jogos_favoritos)

})
*/
//app.route('/').put((req, res) => res.send(req.body.author))

//app.route('/:parametro').get((req, res) => res.send(req.params.parametro))

//Route Parametros

//app.route('/').get((req, res) => res.send('oi'))
//Tudo o que vir depois da / vira uma variavel dentro do código
//Pode ser qualquer nome
//app.route('/:variavel').get((req, res) => res.send(req.params.variavel))
//app.route('/:identidade/:nome').get((req, res) => res.send(req.params.nome))

//Query Params
//São identificados na URL atravéz da ?nome=matheus 
//Não precisando criar um param na rota
//Posso passar mais de um parametro ?nome=matheus&cidade=Araçatuba
app.route('/').get((req, res) => res.send(req.query.cidade))

app.route('/about/user').get((req, res) => res.send(req.query.id))

