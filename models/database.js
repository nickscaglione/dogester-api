const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/dogester';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE dogs(id SERIAL PRIMARY KEY, name VARCHAR(40) not null, image_url TEXT not null, score INT)');
query.on('end', () => { client.end(); });
