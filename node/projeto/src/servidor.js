const porta = 3003

const  express = require('express')
const app = express()
const bodyParse = require('body-parser')
const bancoDeDados = require('./bancoDeDados.js')

app.use(bodyParse.urlencoded({extended: true})) /* qualquer requisicao no servidor ira passar pelo middleware e se estiver usando o padrao url encoded
sera feito o parse
*/


app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
    // next()
})

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // vai converter para JSON
})

app.post('/produtos', (req,res,next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco:req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req,res,next) =>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.name,
        preco:req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req,res,next) =>{
    const produto = bancoDeDados.exlcuirProduto(req.params.id)
    res.send( produto)
})


app.listen(porta, ()=> {
    console.log(`servidor esta executando na porta: ${porta}`)
})