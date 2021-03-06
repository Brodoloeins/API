import { Request, Response } from 'express';
import CreateSessionService from '../services/CreateSessionService';

export class SessionController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;
        const createSession = new CreateSessionService();

        const session = await createSession.execute({ email, password });

        return res.json(session);
    }
}
