const express = require('express');
const mysql = require('mysql');

/* .env */ 
require('dotenv').config();

/* Initialize App */ 
const app = express();

/* Start Server */ 
app.listen(process.env.PORT || 8080, () => {
	console.log(`Backend started at port: ${process.env.PORT || 8080}`);
});

/* Setup MySQL */
const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME
	/* 
  	  To open database connection: db.connect()
	  To close database connection: db.end()
	*/
});

/* Express Middlewere */ 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */ 
app.use('/api', require('./routes/api.route'));







/* DO NOT PLACE ANY ROUTES UNDER THIS */
/* HANDLE PRODUCTION MODE */ 
if (process.env.NODE_ENV === 'production') {
	// Static Folder
	app.use(express.static(__dirname + '/public/'));
	//SPA (Single Page Application)
	app.get(/.*/, (req,res) => {
		res.sendFile(__dirname + '/public/index.html');
	});
}