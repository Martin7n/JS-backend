import Cosmetic from "../models/Cosmetic.js";

export default {


    getAll(filter = {}){
            let query = Cosmetic.find({});
    
            if (filter.name) {
                query = query.where({name: {$regex: `${filter.name}`, $options: 'i'}})
            }
    
            // if (filter.itemName) {
            //     query = query.where({itemName: filter.itemName})
            // };
    
            if (filter.description) {
                query =  query.where({description: {$regex: `^${filter.description}$`, $options: 'i'}})
            };  
    
            
            return query
        },
    
    
        getOne(itemId){
            return Cosmetic.findById(itemId);
        },
    
        create(data){
            if ( !data.name){ 
                throw new Error("Error22345678")}
    
            return Cosmetic.create(data)
        },
    
        edit(itemID, itemData){


            return Cosmetic.findByIdAndUpdate(itemID, itemData)
    
        },
        delete(itemId){
            return Cosmetic.findOneAndDelete(itemId);
    
        },

        getLast(sort, num){

            return Cosmetic.find().sort(sort).limit(num);

        },

  



ownerOrRecommend(cosmeId, userId){
return  Cosmetic.findOne({
                        _id: cosmeId,
                        $or: [
                        { owner: userId },
                        { recommendList: userId }
                        ]
                    }).select('_id');
},

async recommend(cosmeId, userId){

    const recommendId = await Cosmetic.findOne({
                        _id: cosmeId,
                        $or: [
                        { owner: userId },
                        { recommendList: userId }
                            ]
                    }).select('_id');

    if (recommendId) throw new Error("You can not recommend own or recommended cosmetics")
    
    return Cosmetic.findByIdAndUpdate(cosmeId, { $push: { recommendList: userId} });
    },

};