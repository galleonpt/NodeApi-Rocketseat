const mongoose = require("mongoose");

const Product = mongoose.model("Product");

//returnar varias funcoes
module.exports = {
  //funcao para listar os elementos da schema
  async index(req, res) {
    const {
      //serve para que no url seja possivel escolher a pagina "?page=1"
      page = 1 //igual a 1 pk se a requisicao falhar ele apresenta a 1ª pagina(default)
    } = req.query;
    //1º objeto->filtros que nos queremos fazer na base de dados "where"(como queremos tds nao fazemos filtros)
    //page-> pagina atual
    //limite-> limite de elementos por pagina
    const products = await Product.paginate(
      {},
      {
        page,
        limit: 10
      }
    );

    return res.json(products);
  },

  //rota de detalhe, vai mostrar os dados de um elemento
  async show(req, res) {
    const product = await Product.findById(req.params.id);
    //na reqquisicao(req) entramos nos parametros e usamos o id(ver no insomnia)
    return res.json(product);
  },

  //rota de criacao de registos na base de dados
  async store(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  },

  /*Rota para atualizar os dados
  passando o id na url ele vai aos seus parametros e altera-os
  pelos que foram passados no body. pomos o new para ele devolver o 
  objeto ja com o campo atualizado senao ele retorna sem o update feito*/

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(product);
  },

  //funcao para eliminar um registo pelo id
  async destroy(req, res) {
    const product = await Product.findByIdAndRemove(req.params.id);

    return res.send(); //vai mandar uma mensagem de sucesso
  }
};
