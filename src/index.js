import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT = process.env.PORT || 1337;

app.listen(PORT, () =>
	console.log(`Server listening on port ${PORT}`)
);
