import 'dotenv/config';
import express, { json } from 'express';
import todoRoutes from './routes/todos.mjs';

const app = express();

app.use(json());

app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});