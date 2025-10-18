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

//json middleware
app.use(express.json());

app.post('/cats', (req, res) => {
  const data = req.body;
  Cat.push(data);
  res.status(200).send({
    success: 200,
  });
});

app.get('/cats/:id', (req, res) => {
  const cat = Cat.find((cat) => {
    return (cat.id = req.params.id);
  });
  res.status(200).send({
    success: true,
    data: {
      cat,
    },
  });
});

app.get('/cats/som', (req, res) => {
  res.send({ som: Cat[1] });
});

app.listen(8000, () => {
  console.log(`Server is running on http://localhost:8000`);
});
