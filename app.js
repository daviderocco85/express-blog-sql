import express from 'express';
import { postsRouter } from './routers/postsRouter.js';

const app = express();
const port = 3000;

app.use('/posts', postsRouter);

app.use((err, req, res, next) => {

    console.error(err);
    res.status(500).json({ error: 'Something went wrong, internal server error' });

});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});