// import { Router } from "express";
// import { isAuth } from "../middlewares/auth-middleware.js";
// import mainmodservice from "../services/mainmodservice.js"
// import { getErrorMessage } from "../utils/errorutils.js";

// const router = Router();

// router.get("/", async (req, res) => {

//     try {

//         const data = await mainmodservice.getAll()
//         console.log(data)
//         return res.render("main/mainp", {data})

//     } catch (err){

//         const error = getErrorMessage(err)
//         return res.render("main/mainp", {error})

//     }

//     res.render("main/mainp", data)
    

// });



// router.get("/create", (req, res) => {
//     res.render("main/create")});


// router.post("/create", async (req, res) => {

//     const data = req.body
//     console.log(data)

//      try {
//         await mainmodservice.create(data);
//      } catch (err) {
//         const error = getErrorMessage(err);
        
//         return res.render("/main/create", {error})
//      }
    
//      res.redirect("/main")

   
    

// });




// export default router;