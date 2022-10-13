import { Router } from 'express';
import { Account } from '../database/models/Account';
// import { UserRole } from '../database/models/UserRole';

export const accounts = Router();

accounts.post('/add', async (req, res, next) => {
	try {
		const user = await Account.bulkCreate(req.body);
		res.status(201).json(user);
	} catch (e) {
		next(e);
	}
});

accounts.get('/find', async (req, res, next) => {
	try {
		const users = await Account.findAll();
		res.status(200).json(users);
	} catch (e) {
		next(e);
	}
});

accounts.get('/find/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const user = await Account.findOne({
			where: {
				id: id,
			},
		});
		res.status(200).json(user);
	} catch (e) {
		next(e);
	}
});

accounts.put('/update/:id', async (req, res, next) => {
	try {
		res.sendStatus(200);
	} catch (e) {
		next(e);
	}
});
