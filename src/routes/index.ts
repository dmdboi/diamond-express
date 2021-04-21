import Express from 'express';
const router = Express.Router();
import IndexController from '../controllers/index';

export default function Routes() {
  const index: IndexController = new IndexController();

  router.get('/', index.base);

  return router;
}
