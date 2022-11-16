import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Bruno', email: 'boliniski@gmail.com'}
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { 
                name: 'Bruno', 
                email: 'boliniski@gmail.com' 
            },
            message: { 
                subject: 'Bem-vindo!', 
                body: 'Olá, seja bem-vindo!'
            }
    });

        return res.send();
    }

};