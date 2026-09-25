import { connection } from '../config/db.js';

export const getAll = async (req, res) => {

    const sql = 'SELECT * FROM posts';
    const [results] = await connection.query(sql);

    res.json(results);

};

export const getById = async (req, res) => {

    const id = Number(req.params.id);

    if (Number.isNaN(id) || !Number.isInteger(id)) {
        res.status(400).json({ error: 'Id deve essere un numero intero' });
        return;
    }

    const sqlPost = 'SELECT * FROM posts WHERE id = ?';
    const [[resultPost]] = await connection.query(sqlPost, [id]);

    if (resultPost === undefined) {
        res.status(404).json({ error: 'Post non trovato' });
        return;
    }

    const sqlTags = `
        SELECT t.label
        FROM tags t
        JOIN post_tag pt ON pt.tag_id = t.id
        WHERE pt.post_id = ?
      `;

    const [resultTags] = await connection.query(sqlTags, [id]);
    resultPost.tags = resultTags.map(t => t.label);

    res.json(resultPost);
};

export const destroyById = async (req, res) => {
    const id = Number(req.params.id);

    if (Number.isNaN(id) || !Number.isInteger(id)) {
        res.status(400).json({ error: 'Id deve essere un numero intero' });
        return;
    }

    const sql = 'DELETE FROM posts WHERE id = ?';
    await connection.query(sql, [id]);


    res.sendStatus(204);
};