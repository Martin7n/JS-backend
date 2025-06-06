import { Router } from "express";
import homeController from "../src/controllers/homeController.js"
import authControler from "../src/controllers/authController.js"
import maincontentcontroller from "../src/controllers/maincontentcontroller.js"
import devicecontroller from "../src/controllers/devicecontroller.js"
const routes = Router();

routes.use(homeController);
routes.use(authControler);
routes.use("/main", maincontentcontroller);
routes.use("/devices", devicecontroller);


// );
routes.all('*url', (req, res) => {
    res.render('404'), {layout: false}
});

console.log("test1")

export default routes;