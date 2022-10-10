import { Router } from 'express';
import { Movie } from '../database/models/Movie';

export const movies = Router();

movies.post('/', async (req, res, next) => {
	try {
		const movie = await Movie.create(req.body);
		res.status(201).json(movie);
	} catch (e) {
		next(e);
	}
});

movies.get('', async (req, res, next) => {
	try {
		res.json({
			name: 'Dangal',
		});
	} catch (e) {
		next(e);
	}
});

movies.get('/:id', async (req, res, next) => {
	try {
		res.sendStatus(200);
	} catch (e) {
		next(e);
	}
});

movies.put('/:id', async (req, res, next) => {
	try {
		res.sendStatus(200);
	} catch (e) {
		next(e);
	}
});
