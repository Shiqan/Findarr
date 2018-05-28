import http from 'http';
import { execute, subscribe } from 'graphql';
import { createServer } from 'http';

import app from './server';
import schema from './schema';

const server = http.createServer(app);
const port = process.env.PORT || 5000;
let currentApp = app;

server.listen(port, () => {
	console.log(`GraphQL-server listening on port ${port}.`);
});

if (module.hot) {
	module.hot.accept(['./server', './schema'], () => {
		server.removeListener('request', currentApp);
		server.on('request', app);
		currentApp = app;
	});
}