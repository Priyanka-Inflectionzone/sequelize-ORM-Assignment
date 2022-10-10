import { Router } from 'express';

export const actors = Router();

actors.post('/', async (req, res, next) => {
	try {
		res.sendStatus(200);
	} catch (e) {
		next(e);
	}
});

actors.get('', async (req, res, next) => {
	try {
		res.json({
			name: 'Aamir Khan',
		});
	} catch (e) {
		next(e);
	}
});

actors.get('/:id', async (req, res, next) => {
	try {
		res.sendStatus(200);
	} catch (e) {
		next(e);
	}
});

actors.put('/:id', async (req, res, next) => {
	try {
		res.sendStatus(200);
	} catch (e) {
		next(e);
	}
});
