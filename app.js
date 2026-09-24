import express from 'express';
import { pizzasRouter } from './routers/pizzasRouter.js';

const app = express();
const port = 3000;

app.use('/pizzas', pizzasRouter);

app.use((err, req, res, next) => {

    console.error(err);
    res.status(500).json({ error: 'Something went wrong with the sql query' });

});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});