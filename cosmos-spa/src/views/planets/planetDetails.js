import { html, render } from 'lit';
import planetsApi from '../../api/planetsApi';



const template = (data) =>
html`<div class="planet-details">
            <img src="${data.image}" class="planet-image">
            <div class="planet-info">
                <h2>Name: ${data.name}</h2>
                <p><strong>Age:</strong> ${data.age}</p>
                <p><strong>Solar System:</strong> ${data.solarSystem}</p>
                <p><strong>Type:</strong> ${data.type}</p>
                <p><strong>Moons:</strong> ${data.moons}</p>
                <p><strong>Size:</strong> ${data.size} km</p>
                <p><strong>Rings:</strong> ${data.rings}</p>
                <p><strong>Description:</strong> ${data.description}.</p>
            </div>

            <div class="actions">
                <a id="like-button" class="like-btn" href="/planet/like/${data._id}">Like</a>
                <a class="edit-btn" href="/planet/edit/${data._id}">Edit</a>
                <a class="delete-btn" href="/planet/delete/${data._id}">Delete</a>
            </div>
            <p id="liked-message" class="liked-message hidden">You've already liked this planet.</p>
        </div>
    </main>`


export default async function planetCatalog(ctx){
    const planetId = ctx.params.id;
    const data = await planetsApi.getOne(planetId)
    console.log(data)
      
      
    ctx.render(template(data))



};