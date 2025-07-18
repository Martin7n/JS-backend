



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

    },

    async updateOne(planetId, formData){
        
        const urlRequested = `${baseUrl}planet/edit/${planetId}`;


        //!! UserAuth to be added after auth creation

        const planet = {...formData, _id: planetId}
        

        const options = {
                    method: "PUT",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(planet)
                    }
        const response = await fetch(urlRequested, options)
                    // .then(response => {
                    // if (!response.ok) 
                    //     throw new Error(`${response.status}`); 
                    // })
//         //         .catch(e => alert(`${e}`)) 
// ;    
            return response
    },

    async createPlanetApi(formData, ownerId){
          const urlRequested = `${baseUrl}planet/create/`;
          const planet = {...formData, owner: ownerId}

          const options = {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(planet)
                    }
        const response = await fetch(urlRequested, options)
 
         return response

    },
}