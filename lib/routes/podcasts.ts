import { Router } from 'express';
import { Podcast } from '../database/models/Podcast';


export const podcasts = Router();

podcasts.post('/add', async (req, res, next) => {
	try {
		const podcast = await Podcast.create(req.body);
		res.status(201).json(podcast);
	} catch (e) {
		next(e);
	}
});


podcasts.get('/find/:id', async (req, res, next) => {
	try {
		const {id} = req.params
		const podcast = await Podcast.findOne({
			where : {
				id : id
			}
		});
		res.status(201).json(podcast);
		
	} catch (e) {
		next(e);
	}
});

podcasts.put('/modify/:id', async (req, res, next) => {
	try {
		const {id} = req.params
		const podcast = await Podcast.update((req.body),{
			where:{
				id : id
			}
		})
		res.sendStatus(200).json(podcast);
	} catch (e) {
		next(e);
	}
});

podcasts.get('/find', async (req, res, next) => {
	try {
		const podcasts = await Podcast.findAndCountAll({})
		res.status(201).json(podcasts);
		
	} catch (e) {
		next(e);
	}
});