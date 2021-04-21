import Express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import IndexRoutes from './routes/index';

class App {
  public app: Express.Application;

  constructor() {
    this.app = Express();

    this.Config();
    this.Routes();
  }

  private Config(): void {
    this.app.use(cors());
    this.app.use(logger());

    this.app.use(cookieParser());
    this.app.use(bodyParser());
  }

  private Routes() {
    const indexRoutes = IndexRoutes();

    this.app.use('/', indexRoutes);
  }
}

export default new App().app;
