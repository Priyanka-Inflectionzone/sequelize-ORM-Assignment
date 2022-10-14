import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as errorhandler from 'strong-error-handler';
import { artists } from './routes/artists';
 import { accounts } from './routes/accounts';
import { users } from './routes/users';
import { podcasts } from './routes/podcasts';
import { podcastEpisodes } from './routes/podcastEpisodes';
import { audiobooks } from './routes/audiobooks';
import { studios } from './routes/studios';


export const app = express();

// middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// middleware for json body parsing
app.use(bodyParser.json({ limit: '5mb' }));

// enable corse for all origins
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Expose-Headers', 'x-total-count');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
	res.header('Access-Control-Allow-Headers', 'Content-Type,authorization');

	next();
});

 app.use('/artists', artists);
 app.use('/accounts', accounts);
 app.use('/users', users);
 app.use('/podcasts', podcasts);
 app.use('/podcastEpisodes', podcastEpisodes);
 app.use('/audiobooks', audiobooks);
 app.use('/studios', studios);

app.use(
	errorhandler({
		debug: process.env.ENV !== 'prod',
		log: true,
	})
);

