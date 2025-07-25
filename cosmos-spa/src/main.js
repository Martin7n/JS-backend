import page from 'page';
import homeView from './views/homeView.js';
import layoutView from './views/layoutView.js';
import planetCatalog  from './views/planets/planetCatalog.js';
import planetDetails from './views/planets/planetDetails.js'
import render404 from './views/render404.js';
import planetEdit from './views/planets/planetEdit.js';
import planetCreate from './views/planets/planetCreate.js';
import loginUser from './views/auth/loginUser.js';
import registerUser from './views/auth/registerUser.js';




const setupRoutes = () => {
    page(layoutView);
    page('/', homeView);
    page('/planet/catalog', planetCatalog);
    page('/planet/details/:id', planetDetails);
    page('/planet/edit/:id', planetEdit);
    page('/planet/create/', planetCreate);
    page('/login', loginUser)    
    page('/register', registerUser)
    page('/404', render404)


  
    page();
  };




setupRoutes();