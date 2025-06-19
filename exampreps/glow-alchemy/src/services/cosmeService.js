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

        }

};