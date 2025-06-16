
import express from 'express';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import cors from "cors";
import routes from './routes.js';
import { SERVER_PORT, mongooseConnect } from './config.js';
import { authMiddleware } from './middlewares/auth-middleware.js';


const app = express();

app.use(express.static('./src/public'));
app.use(express.urlencoded());

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
app.use(routes);


app.listen(SERVER_PORT, () => console.log(`Server is listening on http://localhost:${SERVER_PORT}....`));
