import express, { Request, Response, NextFunction } from 'express'
const app = express();

app.use(express.json());


app.get('/hi', (req: Request, res: Response, next: NextFunction) => {
  res.send('<h1>Hello World</h1>')
})

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
