import { connection } from '../config/db.js';

export const getAll = async (req, res) => {

    const sql = 'SELECT * FROM pizzas';
    const [results] = await connection.query(sql);

    res.json(results);

};

export const getById = async (req, res) => {

    const id = Number(req.params.id);

    if (Number.isNaN(id) || !Number.isInteger(id)) {
        res.status(400).json({ error: 'Id must be an integer' });
        return;
    }

    const sql = 'SELECT * FROM pizzas WHERE id = ?';
    const [[result]] = await connection.query(sql, [id]);

    if (result === undefined) {
        res.status(404).json({ error: 'pizza not found' });
        return;
    }

    res.json(result);
};

export const destroyById = async (req, res) => {
    const id = Number(req.params.id);

    if (Number.isNaN(id) || !Number.isInteger(id)) {
        res.status(400).json({ error: 'Id must be an integer' });
        return;
    }

    const sql = 'DELETE FROM pizzas WHERE id = ?';
    await connection.query(sql, [id]);


    res.sendStatus(204);
};