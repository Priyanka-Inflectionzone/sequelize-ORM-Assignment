import { Router } from 'express';
import { Audiobook } from '../database/models/Audiobook';
// import { UserRole } from '../database/models/UserRole';

export const audiobooks = Router();

audiobooks.post('/', async (req, res, next) => {
	try {
		const audiobook = await Audiobook.create(req.body);
		res.status(201).json(audiobook);
	} catch (e) {
		next(e);
	}
});

audiobooks.get('/find', async (req, res, next) => {
	try {
		const allAudiobooks = await Audiobook.findAll({});
		res.status(201).json(allAudiobooks);
	} catch (e) {
		next(e);
	}
});