const baseUrl = "http://localhost:3030/"

export default {
    async register(userData){
        

        const reqUrl = `${baseUrl}register`
        console.log(reqUrl)

        const options = {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData)
                };
        
        const response = await fetch(reqUrl, options);
        const {user, token} = await response.json()
      
        return user, token

    },


    async login(userData){
        const reqUrl = `${baseUrl}login`
        const options = {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData)
                    }
        //  return 
         const response = await fetch(reqUrl, options)

         const {user, token} = await response.json();
         console.log({user, token})


    },

    
};