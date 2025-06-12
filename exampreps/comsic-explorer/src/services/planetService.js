import Planet from "../models/Planet.js";


export default {

    getAll(filter = {}){

        let query = Planet.find({});

        if (filter.name) {
            query = query.where({name: {$regex: `${filter.name}`, $options: 'i'}})
        }

        if (filter.solarSystem) {
            query = query.where({solarSystem: {$regex: `${filter.solarSystem}`, $options: 'i'}})
        }

        // throw new Error("errrrrrrrrrr")

        return query;

    },


    create(data, userId){

        return Planet.create({...data, owner: userId});

    }


};