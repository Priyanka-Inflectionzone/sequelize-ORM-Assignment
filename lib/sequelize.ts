import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
	username: 'root',
	password: 'Rajveer@2404',
	database: 'sequelize-musicApp',
	host: 'localhost',
	port: 3306,
	dialect: 'mysql',
	models: [__dirname + '/database/models'],
	logging : true
});
sequelize.authenticate()
.then(()=>{
  console.log("Connected");
})
.catch (err =>{
    console.log("Error" +err);
})
