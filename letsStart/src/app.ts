import * as express from 'express';
import { Cat, CatType } from './app.module';

const app: express.Express = express();

app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  next();
});

app.get('/cats', (req, res, next) => {
  console.log('This is the first middleware');
  next();
});

app.get('/', (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.get('/cats/blue', (req, res) => {
  res.send({ blue: Cat[0] });
});

app.get('/cats/som', (req, res) => {
  res.send({ som: Cat[1] });
});

app.listen(8000, () => {
  console.log(`Server is running on http://localhost:8000`);
});
