const mongoose = require('mongoose');

const MONGO_URL =
	'mongodb+srv://nasa-api:6q4o7ECRBMVSrSA4@nasacluster.crexwln.mongodb.net/nasa?retryWrites=true&w=majority';

mongoose.connection.once('open', () => {
	console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (error) => {
	console.error(error);
});

async function mongoConnect() {
	await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
	await mongoose.disconnect();
}

module.exports = {
	mongoConnect,
	mongoDisconnect,
};
