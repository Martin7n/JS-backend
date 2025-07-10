import Car from "../models/Car.js";

export default {


    getAll(filter = {}){
            let query = Car.find({});


            if (filter) {
                query = query.where({itemName: filter.itemName})
            };
    

            
            return query
        },

        getByOwner(ownerId){
            return Car.find({ owner: ownerId });
        },
    
    
        getOne(itemId){
            return Car.findById(itemId)
                .populate('likes', 'email')
                .populate('owner', 'firstName lastName');
            
        },
    
        create(data){
            // if ( !data.manufacturer){ 
            //     throw new Error("Error22345678")}
    
            return Car.create(data)
        },
    
        edit(itemID, itemData,){


            return Car.findByIdAndUpdate(itemID, itemData)
    
        },
        delete(itemId){
            return Car.findOneAndDelete(itemId);
    
        },

        getLast(sort, num){

            return Car.find().sort(sort).limit(num);

        },

  



ownerOrLiked(carId, userId){
return  Car.findOne({
                        _id: carId,
                        $or: [
                        { owner: userId },
                        { likes: userId }
                        ]
                    }).select('_id');
},

async like(carId, userId){

    const likeId = await Car.findOne({
                        _id: carId,
                        $or: [
                        { owner: userId },
                        { likes: userId }
                            ]
                    }).select('_id');

    if (likeId) throw new Error("You can not like own or liked car")
    
    return Car.findByIdAndUpdate(carId, { $push: { likes: userId} });
    },

};