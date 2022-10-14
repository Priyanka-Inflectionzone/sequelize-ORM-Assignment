import { Router } from 'express';
import { Account } from '../database/models/Account';
// import { UserRole } from '../database/models/UserRole';

export const accounts = Router();

accounts.post('/', async (req, res, next) => {
	try {
		const account = await Account.create(req.body);
		res.status(201).json(account);
	} catch (e) {
		next(e);
	}
});

accounts.get('/find', async (req, res, next) => {
	try {
		const user = await Account.findAll({});
		res.status(201).json(user);
	} catch (e) {
		next(e);
	}
});
