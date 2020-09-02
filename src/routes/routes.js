import express from 'express';
import contactController from '../controllers/Contact.controller';
import { CreateContactSchema, hasIdSchema } from '../models/Contact.model';
import validation from '../middlewares/validation';

const Routes = express.Router();

Routes.get('/contacts', contactController.list);
Routes.post('/contacts', validation(CreateContactSchema, 'body'), contactController.create);
Routes.get('/contacts/:id', validation(hasIdSchema, 'params'), contactController.details);
Routes.delete('/contacts/:id', validation(hasIdSchema, 'params'), contactController.delete);
Routes.put('/contacts/:id/deactivate', validation(hasIdSchema, 'params'), contactController.deactivate);

export default Routes;