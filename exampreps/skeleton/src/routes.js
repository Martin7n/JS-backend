import { Router } from "express";
import homeController from "../src/controllers/homeController.js"
import authControler from "../src/controllers/authController.js"
const routes = Router();

routes.use(homeController);
routes.use(authControler);
// );
routes.all('*url', (req, res) => {
    res.render('404'), {layout: false}
});

console.log("test1")

export default routes;