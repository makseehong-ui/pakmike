import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db } from '@vercel/postgres';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Sample route to check API status
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Sample route to fetch data from Vercel Postgres
app.get('/api/data', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM items');
    res.json(rows);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Sample route to insert data
app.post('/api/data', async (req, res) => {
  const { name, description } = req.body;
  try {
    await db.query('INSERT INTO items (name, description) VALUES ($1, $2)', [name, description]);
    res.status(201).json({ message: 'Item created successfully' });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default app;
