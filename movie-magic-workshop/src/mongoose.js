import mongoose from 'mongoose';

try{
await mongoose.connect('mongodb://127.0.0.1:27017/testdb');
console.log('Connected to DB');
}catch(err){
console.log('Failed to connect DB...');
console.log(err);
}
