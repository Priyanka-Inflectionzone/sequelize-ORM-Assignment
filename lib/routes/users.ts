import { Router } from 'express';
import { User } from '../models/User';
// import { UserRole } from '../database/models/UserRole';

export const users = Router();

users.post('/add', async (req, res, next) => {
	try {
		const user = await User.create(req.body);
		res.status(201).json(user);
	} catch (e) {
		next(e);
	}
});