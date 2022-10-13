import { Router } from 'express';
import { User } from '../database/models/User';
// import { UserRole } from '../database/models/UserRole';

export const users = Router();

users.post('/add', async (req, res, next) => {
	try {
		const user = await User.bulkCreate(req.body);
		res.status(201).json(user);
	} catch (e) {
		next(e);
	}
});

users.get('/find', async (req, res, next) => {
	try {
		const users = await User.findAll();
		res.status(200).json(users);
	} catch (e) {
		next(e);
	}
});

users.get('/find/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const user = await User.findOne({
			where: {
				id: id,
			},
		});
		res.status(200).json(user);
	} catch (e) {
		next(e);
	}
});

users.put('/update/:id', async (req, res, next) => {
	try {
		res.sendStatus(200);
	} catch (e) {
		next(e);
	}
});
