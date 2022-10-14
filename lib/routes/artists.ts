import { Router } from 'express';
import{ Artist } from '../database/models/Artist'
//import { Podcast } from '../database/models/Podcast';

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
		const { id } = req.params;
		const artist = await Artist.findOne({
			where: {
				id: id,
			},
		});
		res.sendStatus(200).json(artist);
	} catch (e) {
		next(e);
	}
});
