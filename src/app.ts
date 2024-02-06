import 'dotenv/config';
import express, { json } from 'express';
import routes from './routes';

const app = express();

app.use(json());

app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});