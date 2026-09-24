import express from 'express';
import { connection } from './config/db.js';

const app = express();
const port = 3000;

app.get('/pizzas', async (req, res) => {
    try {
        const sql = 'SELECT * FROM pizzas';
        const [results] = await connection.query(sql);

        res.json(results);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong with the sql query' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});