const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

/*Schema -> quais sao os campos que cada produto pode ter e que tipo
            de avalores esses campos vao guardar
            cada campo vai ser uma coluna na base de dados
       
            
  Cada produto vai ter:
    -titulo
    -description
    -url
    -data de criacao de cada produto
*/

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createdAt: {
    //e criado automaticamente
    type: Date,
    default: Date.now
  }
});

//poder paginar os objetos
ProductSchema.plugin(mongoosePaginate);

mongoose.model("Product", ProductSchema);