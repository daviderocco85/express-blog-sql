import { connection } from '../config/db.js';

export const getAll = async (req, res) => {

    const sql = 'SELECT * FROM pizzas';
    const [results] = await connection.query(sql);

    res.json(results);

};