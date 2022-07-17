import pg from 'pg';

const client = new pg.Client({
  user: 'postgres',
  host:'localhost',
  password: 'root',
  database: 'postgres',
  port: 5432,
})

client.connect();
console.log('📦📦 Database connected!')
