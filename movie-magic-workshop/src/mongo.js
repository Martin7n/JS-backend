import { MongoClient } from 'mongodb'


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'Students';

async function main() {
await client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName);
const collection = db.collection('students');
await collection.insertOne({name: 'Ivan', age: 19});
return 'done.';
}
main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());
