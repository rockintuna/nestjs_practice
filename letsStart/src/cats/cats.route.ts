import { Cat, CatType } from './cats.module';
import { Router } from 'express';

const router = Router();

router.get('/cats', (req, res, next) => {
  console.log('This is the first middleware');
  next();
});

router.post('/cats', (req, res) => {
  const data = req.body;
  Cat.push(data);
  res.status(200).send({
    success: 200,
  });
});

router.get('/cats/:id', (req, res) => {
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

export default router;
