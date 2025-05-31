
import express from 'express';
import handlebars from 'express-handlebars';

import routes from './routes.js';
import { SERVER_PORT, mongooseConnect } from './config.js';
import { authMiddleware } from './middlewares/auth-middleware.js';


const app = express();

app.use(express.static('./src/public'));
app.use(express.urlencoded());


// * HBS settings ()
// ! import handlebars from 'express-handlebars';

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
     runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    },
    // helpers: {},
}) );
app.set('view engine', 'hbs');
app.set('views', './src/views');



mongooseConnect("n");
app.use(authMiddleware);
app.use(routes);

app.listen(SERVER_PORT, () => console.log(`Server is listening on http://localhost:${SERVER_PORT}....`));
