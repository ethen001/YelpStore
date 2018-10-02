const knex = require('knex')({
  client: 'pg',
  connection: {
    host : process.env.IP,
    user : 'ubuntu',
    password : '5432',
    database : 'yelpstoredb'
  }
});

knex.createTable('items', function() {
  knex.increments();
  knex.string('name');
  knex.string('condition');
  knex.float('price');
  knex.string('picture');
  knex.string('description');
  knex.date('createdAt');
  knex.date('updatedAt');
});

knex.select('*').from('items').then(item => {
  console.log(item);
}).catch(err => console.log(err)).then(() => {
  setTimeout(function() {process.exit()}, 2000);
} );
