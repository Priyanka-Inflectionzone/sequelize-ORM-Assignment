import { Router } from 'express';
import { Studio } from '../database/models/Studio';
// import { UserRole } from '../database/models/UserRole';

export const studios = Router();

studios.post('/', async (req, res, next) => {
	try {
		const studio = await Studio.create(req.body);
		res.status(201).json(studio);
	} catch (e) {
		next(e);
	}
});

studios.get('/find', async (req, res, next) => {
	try {
		const allStudios = await Studio.findAll({});
		res.status(201).json(allStudios);
	} catch (e) {
		next(e);
	}
});