require("dotenv").config();
const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const { koaBody } = require('koa-body');
const path = require('path');
const { MongoClient, ObjectId } = require("mongodb");
// const { initializeApp } = require("firebase/app");
// const {
//   getFirestore,
//   doc,
//   collection,
//   query,
//   where,
//   limit,
//   getDoc,
//   getDocs,
//   updateDoc
// } = require('firebase/firestore/lite');
// // import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyCk7MJfTdiNpvKk9XKwDU380KQ09Ossst8",
//   authDomain: "project-koa-preact.firebaseapp.com",
//   projectId: "project-koa-preact",
//   storageBucket: "project-koa-preact.appspot.com",
//   messagingSenderId: "944419246591",
//   appId: "1:944419246591:web:05f9e94247e58e636897ca",
//   measurementId: "G-E9BKYYV5YG"
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const firebaseDb = getFirestore(firebaseApp);
// const documents = collection(firebaseDb, 'documents');

// console.log('---DB', firebaseDb);
// console.log('---COLLECTION', documents);

// const googleAnalytics = getAnalytics(firebaseApp);

console.log('---ENV', process.env.NODE_ENV);

// connect to DB
const dbUrl = process.env.NODE_ENV === "development" ? process.env.MONGO_PUBLIC_URL : process.env.MONGO_URL;
const dbClient = new MongoClient(dbUrl);
const dbName = process.env.DATABASE_NAME;

console.log('---DB URL', dbUrl);
console.log('---DB NAME', dbName);

// let database, collection;
let collectionDocuments; // collection name: 'documents'

dbClient.connect()
  .then(conn => conn)
  .then(client => client.db(dbName))
  .then(db => {
    // database = db;
    collectionDocuments = db.collection('documents');
    console.log('---Connected to the database server and database');
  })
  .catch(error => console.error('---CONNECTION ERROR: ', error))

// const connectToDatabase = async () => {
//   try {
//     await dbClient.connect();
//     console.log('---connected to the database server');
//     database = dbClient.db(dbName);
//     console.log('---connected to the database')
//     // collection = db.collection('documents');
//   } catch (error) {
//     console.error('Error connecting to database:', error);
//     throw error; // Re-throw the error to handle it in the calling function
//   }

//   return database;
// }

// connectToDatabase()
//   .then(db => collection = db.collection('documents'))
//   .catch(error => console.error("Connection Error 2: ", error));

const server = new Koa();
const router = new Router();

// Serve static files
server.use(serve(path.join(__dirname, '../client/dist')));

server.use(koaBody());

// Your API routes would go here
router
  .get('/api/test', async (ctx) => {
    // const mainDishQuery = query(documents, where('dishType', '==', 'main'));
    // const mainDishDocs = await getDocs(mainDishQuery, limit(1));
    // console.log('---MAIN DISH RESULT', mainDishDocs);
    // console.log('---DOC', mainDishDocs.docs[0].data());

    // mainDishDocs.forEach(doc => console.log('---DOC', doc.data()));

    let doc;
    try {
      doc = await collectionDocuments.findOne({ "name": "ranch chicken" });
    }
    catch (error) {
      console.log('---(api/test/) MONGO DB FIND ERROR', error);
    }

    console.log('---DOC', doc);

    ctx.status = 200;
    ctx.body = { document: doc };
  })
  .get('/api/dishByName/:name', async (ctx) => {
    console.log('---GET BY DISH NAME REQ PARAMS', ctx.params.name);

    let doc;
    try {
      doc = await collectionDocuments.findOne({ "name": ctx.params.name.toLowerCase() });
    }
    catch (error) {
      console.log('---(api/test/) MONGO DB FIND ERROR', error);
    }

    console.log('---DOC', doc);

    ctx.status = 200;
    // ctx.body = { ctx_param: ctx.params.name };
    ctx.body = doc ? { document: doc } : { document: {error: 'Unable to find that dish.'}};
  })
  .get('/api/dishById/:id', async (ctx) => {
    console.log('---GET BY DISH ID REQ PARAMS', ctx.params.id);
    ctx.status = 200;
    ctx.body = { ctx_param: ctx.params.id };
  })
  .get('/api/privateDishes/:author/:type', async (ctx) => {
    console.log('---GET ALL PRIVATE DISHES FOR USER REQ PARAMS AUTHOR', ctx.params.author);
    console.log('---GET ALL PRIVATE DISHES FOR USER REQ PARAMS TYPE', ctx.params.type);

    // const privateDishesQuery = query(documents, where('dishType', '==', 'main'), where('authorName', '==', 'Homer Simpson'));
    // const privateDishesDocs = await getDocs(privateDishesQuery);
    // console.log('---PRIVATE DISH RESULT', privateDishesDocs);
    // console.log('---DOC', privateDishesDocs.docs[0].data());
    // console.log('---PRIVATE DISHES DOCS', privateDishesDocs.docs);

    // privateDishesDocs.forEach(doc => console.log('---DOC', doc.data()));

    ctx.status = 200;
    ctx.body = { ctx_param_author: ctx.params.author, ctx_param_type: ctx.params.type };
    // ctx.body = { message: 'Hello from Koa!' };
  })
  .get('/api/publicDishes/:type', async (ctx) => {
    console.log('---GET ALL PUBLIC DISHES REQ PARAMS', ctx.params.type);

    // const publicDishesQuery = query(documents, where('dishType', '==', 'main'));
    // const publicDishesDocs = await getDocs(publicDishesQuery);

    ctx.status = 200;
    // ctx.body = { dishes: publicDishesDocs.docs };
    // ctx.body = publicDishesDocs.docs;
    ctx.body = { message: 'Hello from Koa!' };
  })
  .post('/api/dish', async (ctx) => {
    // const body = JSON.parse(ctx.request.body);
    // console.log('---POST REQ BODY', body);

    ctx.status = 201;
    ctx.body = { message: 'document created' };
  })
  .post('/api/account', async (ctx) => {
    // const body = JSON.parse(ctx.request.body);
    // console.log('---POST REQ BODY', body);

    ctx.status = 201;
    ctx.body = { message: 'account created' };
  })

server.use(router.routes());

module.exports = server;
