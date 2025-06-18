
import express from 'express';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import cors from "cors";
import routes from './routes.js';
import { SERVER_PORT, mongooseConnect } from './config.js';
import { authMiddleware } from './middlewares/auth-middleware.js';


const app = express();

app.use(express.static('./src/public'));

//!! extended urlencoded + express.json in order to parse the request data/json;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(expressSession({
    secret: 'wkjkjrkwewjre',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true
    }
}))

app.use(cors({
  origin: 'http://localhost:5173'
}));



mongooseConnect("cosmicDB");
app.use(authMiddleware);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});
app.use(routes);


app.listen(SERVER_PORT, () => console.log(`Server is listening on http://localhost:${SERVER_PORT}....`));
