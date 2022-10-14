import { Router } from 'express';
import { PodcastEpisode } from '../database/models/PodcastEpisode';
// import { UserRole } from '../database/models/UserRole';

export const podcastEpisodes = Router();

podcastEpisodes.post('/', async (req, res, next) => {
	try {
		const podcastEpisode = await PodcastEpisode.create(req.body);
		res.status(201).json(podcastEpisode);
	} catch (e) {
		next(e);
	}
});

podcastEpisodes.get('/find', async (req, res, next) => {
	try {
		const allPodcastEpisodes = await PodcastEpisode.findAndCountAll({});
		res.status(201).json(allPodcastEpisodes);
	} catch (e) {
		next(e);
	}
});