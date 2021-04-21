import { Response } from 'Express';

export default abstract class Controller {
  protected response(
    res: Response,
    status: number,
    data: any,
    message?: string
  ): Response {
    return res.status(status).json({
      message: message,
      data: data
    });
  }
}
