import express from 'express';
import handlebars from 'express-handlebars'
import homeController from './controllers/homeController.js';
import moviesController from './controllers/moviesController.js';


const app = express();
app.use(express.static('./src/public'));
app.use(express.urlencoded());
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    helpers: {
        showRating(rating){
            return '★'.repeat(Math.floor(rating));
        }
    }
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');


//main routes => router .controller.
app.use(homeController);
app.use('/movies', moviesController);
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


