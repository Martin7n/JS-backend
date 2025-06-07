import Device from "../models/Device.js";


export default {

    getAll(filter = {}){
            let query = Device.find({});
    
            if (filter.name) {
                query = query.where({name: {$regex: `${filter.name}`, $options: 'i'}})
            }
    
            // if (filter.itemName) {
            //     query = query.where({itemName: filter.itemName})
            // };
            
            if (filter.owner) {
                query = query.find({owner: filter.owner})
            };

            if (filter.prefferedBy) {
                query = query.in({'preferredList': filter.prefferedBy})
            };

            if (filter.description) {
                query =  query.where({description: {$regex: `^${filter.description}$`, $options: 'i'}})
            };  
    
            
            return query
        },

        getLasttripple(numberOfObj, sorting){
            return Device.find({}).sort({created_at: sorting}).limit(numberOfObj)
        },
    
    
        getOne(itemId){
            return Device.findById(itemId);
        },
    
        create(data, userId){
            if ( !data.brand){ 
                throw new Error("Error22345678")}
    
            return Device.create({...data, owner: userId})
        },
    
        edit(itemID, itemData){
            return Device.findByIdAndUpdate(itemID, itemData)
    
        },
        delete(itemId){
            return Device.findOneAndDelete(itemId);
    
        },

        async preffer(deviceId, userId){

           const device = await Device.findById(deviceId);
            if(device.owner.equals(userId)) 
                {throw new Error("Can not preffer own devices")};
            if(device.preferredList.includes(userId)) 
                {throw new Error("Already preffered")};

            device.preferredList.push(userId);
            return device.save();

        }

    
};