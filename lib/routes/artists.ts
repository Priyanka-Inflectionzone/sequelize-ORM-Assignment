import { Router } from 'express';
import { Artist } from '../database/models/Artist';
// import { UserRole } from '../database/models/UserRole';

export const artists = Router();

artists.post('/', async (req, res, next) => {
	try {
		const artist = await Artist.create(req.body);
		res.status(201).json(artist);
	} catch (e) {
		next(e);
	}
});

artists.get('/find', async (req, res, next) => {
	try {
		const allArtists = await Artist.findAll({});
		res.status(201).json(allArtists);
	} catch (e) {
		next(e);
	}
});