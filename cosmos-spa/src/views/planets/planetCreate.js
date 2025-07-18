import { html, render } from 'lit';
import planetsApi from '../../api/planetsApi.js';
import render404 from '../render404.js';
import page from "page";



const template = () =>
html`<div class="planet-details">
            <form class="planet-form" 
            @submit=${(e) => {createPlane(e)}} 
            action="javascript:void(0);"
            >
            <label for="name">Name of Planet:</label>
            <input type="text" id="name" name="name">

            <label for="age">Age (in billion years):</label>
            <input type="number" id="age" name="age">

            <label for="solarSystem">Solar System:</label>
            <input type="text" id="solarSystem" name="solarSystem">

            <label for="type">Type:</label>
            <select id="type" name="type">
                <option value="---" selected>---</option>
                <option value="Inner">Inner</option>
                <option value="Outer">Outer</option>
                <option value="Dwarf">Dwarf</option>
            </select>

            <label for="moons">Moons (count):</label>
            <input type="number" id="moons" name="moons">

            <label for="size">Size (in km):</label>
            <input type="number" id="size" name="size">

            <label for="rings">Rings:</label>
            <select id="rings" name="rings">
                <option value="---" selected>---</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>

            <label for="description">Description:</label>
            <textarea id="description" name="description" rows="4"></textarea>

            <label for="image">Image URL:</label>
            <input type="url" id="image" name="image">

            <button type="submit">Add Planet</button>
        </form>
        </div>
    </main>`


export default async function planetCreate(ctx){
    const planetId = ctx.params.id;
    // const data = await planetsApi.getOne(planetId)
    // console.log(data)
      
    ctx.render(template())
};


async function createPlane(event) {
    //!! isAuth
     const form = event.target;
     const formData = new FormData(form);
     const planet = Object.fromEntries(formData);

     //!! dummy data
     let ownerId = "684aa3f8d2d4b9f7bc3bf1aa"
     //!! dummy data
     try {

        await planetsApi.createPlanetApi(planet, ownerId)
        page.redirect("/planet/catalog")

     } catch (err) {
        console.log(err)
        page.redirect("/")
        
     }
    
}