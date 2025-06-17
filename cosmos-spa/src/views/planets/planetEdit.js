import { html, render } from "lit";
import planetsApi from '../../api/planetsApi.js';
import page from "page";



const template = (data) => html` 


        <form class="edit-form"  @submit=${(e) => {planetUpdate(e)}} 
    action="javascript:void(0);">
            <label for="name">Name of Planet:</label>
            <input type="text" id="name" name="name" value="${data.name}">

            <label for="age">Age (in billion years):</label>
            <input type="number" id="age" name="age" value="${data.age}">

            <label for="solarSystem">Solar System:</label>
            <input type="text" id="solarSystem" name="solarSystem" value="${data.solarSystem}">

            <label for="type">Type:</label>
            <select id="type" name="type">
                <option value="Inner" ?selected=${data.type === 'Inner'}>Inner</option>
                <option value="Outer" ?selected=${data.type === 'Outer'}>Outer</option>
                <option value="Dwarf" ?selected=${data.type === 'Dwarf'}>Dwarf</option>
            </select>

            <label for="moons">Moons (count):</label>
            <input type="number" id="moons" name="moons" value="${data.moons}">

            <label for="size">Size (in km):</label>
            <input type="number" id="size" name="size" value="${data.size}">

            <label for="rings">Rings:</label>
            <select id="rings" name="rings">
                <option value="Yes"  ?selected=${data.type === 'Yes'}>Yes</option>
                <option value="No"  ?selected=${data.type === 'No'}>No</option>
            </select>

            <label for="description">Description:</label>
            <textarea id="description" name="description" rows="4">${data.description}</textarea>

            <label for="image">Image URL:</label>
            <input type="url" id="image" name="image" value="${data.image}">

            <button type="submit">Save Changes</button>
        </form>
    </main>`

let planetId;
//!! probably not the best to extract planetId like that...

export default async function planetEdit(ctx){
    planetId = ctx.params.id;
    const data = await planetsApi.getOne(planetId);

      
    ctx.render(template(data))

    };
    

    async function planetUpdate(event) {
        const form = event.target;
        const formData = new FormData(form);
        const planet = Object.fromEntries(formData);
        
    //!! UserAuth to be added after auth creation
        
        try {
            await planetsApi.updateOne(planetId, planet);

            page.redirect("/planet/catalog")

        } catch(err){
            alert(err)

        }
        
    };