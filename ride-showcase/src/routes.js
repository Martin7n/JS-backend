import { Router } from "express";
import homeController from "../src/controllers/homeController.js"
import authControler from "../src/controllers/authController.js"
import carController from "../src/controllers/carController.js"
const routes = Router();

routes.use(homeController);
routes.use(authControler);
routes.use("/", homeController);

routes.use("/cars", carController);

// );
routes.all('*url', (req, res) => {
    res.render('404'), {layout: false}
});

console.log("test1")

export default routes;