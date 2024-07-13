import { Server } from "http";
import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

let server: Server;
async function main() {
	try {
		await mongoose.connect(config.database_url as string);
		server = app.listen(config.port, () => {
			console.log(`Campers shop app is listening on this port: ${config.port}`);
		});
	} catch (error) {
		console.log(error);
	}
}

main();

process.on('unhandledRejection', (err) => {
	console.log(`UnHandleRejection is detected, shutting down ...`,err)
	if (server) {
		server.close(() => {
			process.exit(1)
		})
	}
	process.exit(1)
})

process.on('uncaughtException', (err) => {
	console.log(`UnCaughtException`,err)
	process.exit(1)
})