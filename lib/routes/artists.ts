import { Router } from 'express';
import{ Artist } from '../database/models/Artist'

export const artists = Router();

artists.post('/add', async (req, res, next) => {
	try {
		const artist = await Artist.bulkCreate(req.body);
		res.status(201).json(artist);
	} catch (e) {
		next(e);
	}
});

artists.get('/find', async (req, res, next) => {
	try{
		const artists = await Artist.findAll();
		res.status(200).json(artists);
		
	} catch (e) {
		next(e);
	}
});

artists.get('/find/:id', async (req, res, next) => {
	try {
		res.sendStatus(200);
	} catch (e) {
		next(e);
	}
});
