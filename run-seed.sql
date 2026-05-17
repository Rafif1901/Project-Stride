const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function runSeed() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL (NeonDB)');
    
    const seedPath = path.join(__dirname, 'seed.sql');
    const seedSQL = fs.readFileSync(seedPath, 'utf8');
    
    await client.query(seedSQL);
    console.log('Seed script executed successfully');
  } catch (err) {
    console.error('Error running seed:', err);
  } finally {
    await client.end();
  }
}

runSeed();