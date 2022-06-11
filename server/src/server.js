const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

const PORT = 8000 || process.env.PORT;

const MONGO_URL =
	'mongodb+srv://nasa-api:6q4o7ECRBMVSrSA4@nasacluster.crexwln.mongodb.net/nasa?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
	console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (error) => {
	console.error(error);
});

async function startServer() {
	await mongoose.connect(MONGO_URL);
	await loadPlanetsData();

	server.listen(PORT, () => {
		console.log(`Listening on port ${PORT}...`);
	});
}

startServer();
