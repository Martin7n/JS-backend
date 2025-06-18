const baseUrl = "http://localhost:3030/"

export default {
    register(userData){

        const reqUrl = `${baseUrl}/register`

        const options = {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData)
                };
        


        console.log(userData)


    },


    login(userData){
        const reqUrl = `${baseUrl}/login`
        const options = {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData)
                    }
    };
}