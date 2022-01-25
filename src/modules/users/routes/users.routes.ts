import { Router } from 'express';
import { UsersController } from '../controllers/UserController';
import { celebrate, Joi, Segments } from 'celebrate';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', usersController.index);

usersRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required()
        }
    }),
    usersController.create
);

usersRouter.delete(
    '/:email',
    celebrate({
        [Segments.PARAMS]: {
            email: Joi.string().required()
        }
    }),
    usersController.delete
);

export { usersRouter };