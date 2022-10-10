import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
	username: 'postgres',
	password: 'toor',
	database: 'sequelize-playground',
	host: 'localhost',
	port: 5432,
	dialect: 'postgres',
	models: [__dirname + '/database/models'],
});
