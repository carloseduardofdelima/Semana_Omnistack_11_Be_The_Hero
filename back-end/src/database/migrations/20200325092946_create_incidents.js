
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table) {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    //Esse ong_id é o id lá da tabela de ongs
    table.string('ong_id').notNullable();

    //Aqui é o constraint que liga as duas chaves 
    table.foreign('ong_id').references('id').inTable('ongs');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
