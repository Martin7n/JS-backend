import { Router } from "express";
import { isAuth } from "../middlewares/auth-middleware.js";
import carService from "../services/carService.js";
import { getErrorMessage } from "../utils/errorutils.js";

const router = Router();


router.get("/rides", async(req, res) => {
    const title = "Car catalog"
    
    try {
            const data = await carService.getAll()
            res.render("car/catalog", {data, title})
        } catch (err){
            const error = getErrorMessage(err)
            return res.render("car/catalog", {error})
    
        }
    
    });



router.get("/create", isAuth, (req, res) => {
        const title = "Create Ride"

     res.render("car/create", {title})
});


router.post("/create", isAuth, async (req, res) => {

    const data = req.body
    const user = req.user?.id
    const car = {...data, owner: user}

     try {
        await carService.create(car);
     } catch (err) {
        const error = getErrorMessage(err);
        
        return res.render("car/create", {error})
     }
    
     res.redirect("/cars/rides")
});

    

    router.get("/details/:carId", async (req, res) => {
        const title = "Details Ride"
        const userId = req.user?.id;
        const carId =  req.params.carId
         let liked = false;
        
        try{
            const data = await carService.getOne(carId);
            const owner = (data.owner.id === userId)
            const emails = data.likes.map(user => user.email);
            console.log("isOwner", owner)
           
            if (req.user?.email && emails.includes(req.user.email)) { 
                 liked = true;
                 
            }
            res.render("car/details", {data, emails, liked, owner, title})

            // res.render("car/details", {data})

        } catch(err){
            const error = getErrorMessage(err)
            return res.render("404", {error})
        } 
    });



    router.get("/edit/:carId", isAuth, async (req, res) => {
        const title = "Edit Ride"
        const carId =  req.params.carId;
        const userId = req.user?.id;

        const other = {}
      
        
        try{
            const data = await carService.getOne(carId);
            if (data.owner.id != userId) {throw new Error("You are not authorised")}

            res.render("car/edit", {data, title})


        } catch(err){
            const error = getErrorMessage(err)
            return res.render("home", {error})
        }

    });

    router.post("/edit/:carId", isAuth, async (req, res) => {
        const carId =  req.params.carId;
        const data = req.body;
        const userId = req.user?.id

        try{
            const currentCar = await carService.getOne(carId);


             if (currentCar.owner.id != userId){throw new Error("You don't have permission to delete this ride")}

            await carService.edit(carId, data);

            res.redirect(`/cars/details/${carId}`)

        } catch(err){
            const error = getErrorMessage(err)
            return res.render("car/catalog", {error})
        }
    });


    router.get("/showcase", isAuth, async(req, res) => {
    const title = "Showcase"
       const filter = req.user?.id;
    
    try {
            const data = await carService.getByOwner(filter)
            console.log(data)
            res.render("car/showcase", {data, title})
        } catch (err){
            const error = getErrorMessage(err)
            return res.render("home", {error})
    
        }
    
    });

    router.get("/delete/:carId", isAuth, async(req, res) =>{

        const userId = req.user?.id
        const carId =  req.params.carId;

        try {

            const data = await carService.getOne(carId);
            console.log(data.owner.id == userId)
            if (data.owner.id == userId){
                await carService.delete(carId)
                return res.redirect("/cars/rides")
            } else 
            {  throw new Error("You don't have permission to delete this ride")}

        } catch(err){
            const error = getErrorMessage(err)
            return res.render("home", {error})

        }


    })


     router.get("/like/:carId", isAuth, async(req, res) =>{

        const userId = req.user?.id
        const carId =  req.params.carId;

        try {

            const data = await carService.getOne(carId);
            if (data.owner.id != userId){
                await carService.like(carId, userId)
                return res.redirect(`/cars/details/${carId}`)
            } else 
            {  throw new Error("You don't have permission to like you own cars cars")}

        } catch(err){
            const error = getErrorMessage(err)
            return res.render("home", {error})

        }


    })



export default router;