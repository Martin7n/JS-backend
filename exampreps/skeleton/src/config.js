import mongoose from "mongoose";

export const SERVER_PORT = 3000
export const JSON_WEBTOKEN_SECRET = 'alabala123982342u987874ad';

export const mongooseConnect = (dbName) =>
{

    try {
    const dbAdress = `mongodb://127.0.0.1:27017/${dbName}`
    mongoose.connect(dbAdress)
    mongoose.connection.on('connected', () => 
        console.log(`DB Connected Successfuly!\nConnected to: ${dbName}\nat: ${dbAdress}`))
    
    } catch (err) {
    console.log(`DB Connection error ${err.message}`)
    };

};