



const baseUrl = "http://localhost:3030/"

export default {

async getAll(filter = {}) {

    const urlRequested = `${baseUrl}planet/catalog`;
    const response = await fetch(urlRequested)
    const planets = await response.json();
    
    // console.log(Object.keys(planets).map(() => ({...planets})))

       return planets


     

    
},
}