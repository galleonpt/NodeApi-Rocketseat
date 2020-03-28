const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const requireDir = require('require-dir');

//iniciando o App
const app = express();
app.use(express.json()); //permitir que sejam enviados dados para a api no formato de json(para usar no post)
app.use(cors())

//Iniciando a BD
mongoose.connect("mongodb://localhost:1111/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

requireDir('./src/models')

//Rotas
// use->vai receber qql tipo de requisicao(get, put, delete...)
//sempre que recebermos uma requisicao a partir da rota /api(nao e preciso ter esta rota, 
//so mete-mos se quiser.mos(isso e so um prefixo))
//enviamos para ./src/routes
app.use("/api", require('./src/routes'))

app.listen(1111);