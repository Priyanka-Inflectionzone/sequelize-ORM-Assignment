import { Router } from 'express';
import { Podcast } from '../database/models/Podcast';
// import { UserRole } from '../database/models/UserRole';

export const podcasts = Router();

podcasts.post('/', async (req, res, next) => {
	try {
		const podcast = await Podcast.create(req.body);
		res.status(201).json(podcast);
	} catch (e) {
		next(e);
	}
});

podcasts.get('/find', async (req, res, next) => {
	try {
		const allPodcasts = await Podcast.findAll({});
		res.status(201).json(allPodcasts);
	} catch (e) {
		next(e);
	}
});