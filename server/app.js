import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1/', router);

app.get('/', (req, res) => {
  return res.status(200).send({ message: 'Welcome to Donor Management App' });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
