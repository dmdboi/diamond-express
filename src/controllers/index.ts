import Controller from '../interfaces/types/Controller';
import { Request, Response, NextFunction } from 'express';

export default class IndexController extends Controller {
  constructor() {
    super();
  }

  async base(req: Request, res: Response, next: NextFunction): Promise<void> {
    const data = { url: req.url };
    super.response(res, 200, data, 'Hello World');
  }
}
