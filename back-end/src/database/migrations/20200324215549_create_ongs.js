
//O método up é usado para criar a tabela
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
    //Esse id vai ser criado
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();

  });
};

//Down é o método pra quando o up dá errado
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
