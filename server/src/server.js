const http = require('http');

const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

const PORT = 8000 || process.env.PORT;

const server = http.createServer(app);

async function startServer() {
	await loadPlanetsData();

	server.listen(PORT, () => {
		console.log(`Listening on port ${PORT}...`);
	});
}

startServer();
