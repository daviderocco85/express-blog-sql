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

    const sqlPizza = 'SELECT * FROM pizzas WHERE id = ?';
    const [[resultPizza]] = await connection.query(sqlPizza, [id]);

    if (resultPizza === undefined) {
        res.status(404).json({ error: 'pizza not found' });
        return;
    }

    const sqlIngredients = `
        SELECT i.name
        FROM ingredients i
        JOIN ingredient_pizza ip ON ip.ingredient_id = i.id
        WHERE ip.pizza_id = ?
      `;

    const [resultIngredients] = await connection.query(sqlIngredients, [id]);
    resultPizza.ingredients = resultIngredients.map(i => i.name);

    res.json(resultPizza);
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