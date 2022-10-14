import { Router } from 'express';
import { User } from '../database/models/User';
// import { UserRole } from '../database/models/UserRole';

export const users = Router();

users.post('/', async (req, res, next) => {
	try {
		const user = await User.create(req.body);
		res.status(201).json(user);
	} catch (e) {
		next(e);
	}
});

users.get('/find', async (req, res, next) => {
	try {
		const user = await User.findAll({});
		res.status(201).json(user);
	} catch (e) {
		next(e);
	}
});