import express from 'express';
import handlebars from 'express-handlebars'
import homeController from './controllers/homeController.js';
import moviesController from './controllers/moviesController.js';
import mongoose from 'mongoose';
import castcontroller from './controllers/castcontroller.js';
import authcontroler from './controllers/authcontroler.js';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session'
import { authMiddleware } from './middlewares/auth-middleware.js'

const app = express();

//db init

const SECRET = process.env.SECRET ?? "secretlySecretNonProductionDeSecret12377731999-1"

try {
    const uriDefDev = 'mongodb://127.0.0.1:27017/movie-magic'
    const dbAdress = {
        "default": uriDefDev,
        "online": process.env.DATABASE_URI
    };
    mongoose.connect(dbAdress.online ?? dbAdress.default)
    console.log(`DB Connected Successfuly! Connected to: ${dbAdress.online ? "online" : "local"}`);

} catch (err) {
    console.log(`DB Connection error ${err.message}`)
}




// express conf
app.use(express.static('./src/public'));
app.use(express.urlencoded());

//auth needed middlewares => npm i cookie-parser  npm install express-session
//jwt @ npm i jsonwebtoken
 
app.use(cookieParser());
app.use(expressSession({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: true
        },
    }
));

//templ.eng. conf
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
     runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    },
    helpers: {
       
        showRating(rating){
            return '★'.repeat(Math.floor(rating));
        }
    }
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');


//main routes => router .controller.
app.use(authMiddleware);
app.use(homeController);
app.use('/movies', moviesController);
app.use('/casts', castcontroller);
app.use('/users', authcontroler);
app.all('*url', (req, res) => {
    res.render('404');
});
    


app.listen(5001, () => console.log('Server is listening on http://localhost:5001....'));






// // test1
// app.get('/', (req, res) => {
//     res.send('It works!'); 
// }); 


// test2 - content rendering 
// const context = {
//     name: "contextTestNameValue"
// }

// app.get('/', (req, res) => {
//     // res.send('<h1>It works!</h1>'); 
//     res.render('home', {context});
// });


