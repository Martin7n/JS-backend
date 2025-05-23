import express from 'express';
import handlebars from 'express-handlebars'
import homeControler from './controlers/homeControler.js';


const app = express();
app.use(express.static('./src/public'));
app.use(express.urlencoded());
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(homeControler)


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





app.listen(5001, () => console.log('Server is listening on http://localhost:5001....'));