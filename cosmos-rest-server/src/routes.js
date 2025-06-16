import { Router } from "express";
import homeController from "../src/controllers/homeController.js"
import authControler from "../src/controllers/authController.js"
import maincontentcontroller from "../src/controllers/maincontentcontroller.js"
import planetController from "../src/controllers/planetController.js"
const routes = Router();

routes.get("/", (req, res) => {
    res.send("works")
})

// routes.use(homeController);
// routes.use(authControler);
routes.use("/planet", planetController);

// routes.use("/main", maincontentcontroller);

// );
routes.all('*url', (req, res) => {
    res.send('404')
});

console.log("test1")

export default routes;