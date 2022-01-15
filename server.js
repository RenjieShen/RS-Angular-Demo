import { createServer } from 'http';
import app from './backend/app.js';

const port = process.env.PORT || 3000;
app.set('port', port);
const server = createServer(app);

server.listen(port);