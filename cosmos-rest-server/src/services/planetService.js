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

        return query;

    },


    create(data, userId){

        return Planet.create({...data, owner: userId});

    },

    getOneDetails(planetId){

        return Planet.findById(planetId);

    },

    updatePlanet(planetId, data){

        return Planet.findByIdAndUpdate(planetId, data, { runValidators: true});
    },


    ownerOrLiked(planetId, userId){
    return  Planet.findOne({
                            _id: planetId,
                            $or: [
                            { owner: userId },
                            { likedList: userId }
                            ]
                        }).select('_id');}
  ,

    async likePlanet(planetId, userId){

        const likeId = await Planet.findOne({
                            _id: planetId,
                            $or: [
                            { owner: userId },
                            { likedList: userId }
                            ]
                        }).select('_id');

        if (likeId) throw new Error("You can not like own planets or already liked planets")
    
        return Planet.findByIdAndUpdate(planetId, { $push: { likedList: userId} });
    },

    removePlanet(planetId, userId){


        return Planet.deleteOne({ _id: planetId, owner: userId})
    },


};