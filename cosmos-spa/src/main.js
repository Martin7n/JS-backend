import page from 'page';
import homeView from './views/homeView.js';
import layoutView from './views/layoutView.js';
import planetCatalog from './views/planets/planetCatalog.js';

const setupRoutes = () => {
    page(layoutView);
    page('/', homeView);
    page('/planet/catalog', planetCatalog);


  
    page();
  };




setupRoutes();