import { html, render } from 'lit';
import planetsApi from '../../api/planetsApi';

const  rootElement = document.getElementById("rootElement")

const template = (data) => html`
        
   
  
    ${data.map((planet) => html`
        <div class="planet-card" id="planet1">
            <img
                src="${planet.image}">
            <h3>${planet.name}</h3>
            <p>Solar System: ${String(planet.solarSystem)}</p>
            <a class='detail-btn' href='/planet/details/${planet._id}'>Details</a>

        </div>
        
`
)}`

export default async function planetCatalog(ctx){
      const data = await planetsApi.getAll();
      
      ctx.render(template(data))

    //!!TODO -> css and html update
    // console.log("details")

    // render(template(), rootElement)

};