import express from 'express';
import handlebars from 'express-handlebars'


const app = express();
app.use(express.static('./src/public'));
app.set('view engine', 'hbs');
app.set('views', './src/views');