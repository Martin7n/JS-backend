// import MainModel from "../models/Mainmod.js";


// export default {

//     getAll(filter = {}){
//         let query = MainModel.find({});

//         if (filter.itemName) {
//             query = query.where({itemName: {$regex: `${filter.itemName}`, $options: 'i'}})
//         }

//         // if (filter.itemName) {
//         //     query = query.where({itemName: filter.itemName})
//         // };

//         if (filter.description) {
//             query =  query.where({description: {$regex: `^${filter.description}$`, $options: 'i'}})
//         };  

        
//         return query
//     },


//     getOne(itemId){
//         return MainModel.findById(itemId);
//     },

//     create(data){
//         if ( !data.itemName){ 
//             throw new Error("Error22345678")}

//         return MainModel.create(data)
//     },

//     edit(itemID, itemData){
//         return MainModel.findByIdAndUpdate(itemID, itemData)

//     },
//     delete(itemId){
//         return MainModel.findOneAndDelete(itemId);

//     },

// };