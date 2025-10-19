import * as express from 'express';
import catRouter from './cats/cats.route';

const app: express.Express = express();

app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  next();
});

//json middleware
app.use(express.json());

//app에 cat router 등록
app.use(catRouter);

app.use((req, res, next) => {
  console.log('this is error middleware');
  res.send({
    error: '404 not found',
  });
});

app.listen(8000, () => {
  console.log(`Server is running on http://localhost:8000`);
});
