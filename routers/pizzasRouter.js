import express from 'express';
import * as pizzasController from '../controllers/pizzasController.js';

export const pizzasRouter = express.Router();

// Index di tutte le pizze
pizzasRouter.get('/', pizzasController.getAll);

// Show dell'articolo con specifico id
pizzasRouter.get('/:id', pizzasController.getById);

// Destroy
pizzasRouter.delete('/:id', pizzasController.destroyById);

