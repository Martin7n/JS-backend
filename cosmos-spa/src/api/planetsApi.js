



const baseUrl = "http://localhost:3030/"

export default {

async getAll(filter = {}) {

    const urlRequested = `${baseUrl}planet/catalog`;
    // const response = await fetch(urlRequested)
    // const planets = await response.json();
     // return planets

    return await fetch(urlRequested)
                .then(response => {
                    if (!response.ok) 
                        throw new Error(`${response.status}`); 
                    return response.json();})
                .catch(e => alert(`${e}`))    
    
    // console.log(Object.keys(planets).map(() => ({...planets})))    
},

    async getOne(planetId){
        const urlRequested = `${baseUrl}planet/details/${planetId}`;
    

            return await fetch(urlRequested)
                .then(response => {
                    if (!response.ok) 
                        throw new Error(`${response.status}`); 
                    return response.json();})
                .catch(e => alert(`${e}`)) 

    }
}