import express from 'express';
import * as postsController from '../controllers/pizzasController.js';

export const pizzasRouter = express.Router();

// Index di tutte le pizze
pizzasRouter.get('/', postsController.getAll);

