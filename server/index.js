const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');
const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  doc,
  collection,
  query,
  where,
  limit,
  getDoc,
  getDocs,
  updateDoc
} = require('firebase/firestore/lite');
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCk7MJfTdiNpvKk9XKwDU380KQ09Ossst8",
  authDomain: "project-koa-preact.firebaseapp.com",
  projectId: "project-koa-preact",
  storageBucket: "project-koa-preact.appspot.com",
  messagingSenderId: "944419246591",
  appId: "1:944419246591:web:05f9e94247e58e636897ca",
  measurementId: "G-E9BKYYV5YG"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseDb = getFirestore(firebaseApp);
const documents = collection(firebaseDb, 'documents');

// console.log('---DB', firebaseDb);
// console.log('---COLLECTION', documents);

// const googleAnalytics = getAnalytics(firebaseApp);

const server = new Koa();
const router = new Router();

// Serve static files
server.use(serve(path.join(__dirname, '../client/dist')));

// Your API routes would go here
router
  .get('/api/test', async (ctx) => {
    const mainDishQuery = query(documents, where('dishType', '==', 'main'));
    const mainDishDocs = await getDocs(mainDishQuery, limit(1));
    console.log('---MAIN DISH RESULT', mainDishDocs);
    console.log('---DOC', mainDishDocs.docs[0].data());

    // mainDishDocs.forEach(doc => console.log('---DOC', doc.data()));

    ctx.status = 200;
    ctx.body = { message: 'Hello from Koa!' };
  })
  .get('/api/dishByName/:name', async (ctx) => {
    console.log('---GET BY DISH NAME REQ PARAMS', ctx.params.name);
    ctx.status = 200;
    ctx.body = { ctx_param: ctx.params.name };
  })
  .get('/api/dishById/:id', async (ctx) => {
    console.log('---GET BY DISH ID REQ PARAMS', ctx.params.id);
    ctx.status = 200;
    ctx.body = { ctx_param: ctx.params.id };
  })
  .get('/api/privateDishes/:author/:type', async (ctx) => {
    console.log('---GET ALL PRIVATE DISHES FOR USER REQ PARAMS AUTHOR', ctx.params.author);
    console.log('---GET ALL PRIVATE DISHES FOR USER REQ PARAMS TYPE', ctx.params.type);

    const privateDishesQuery = query(documents, where('dishType', '==', 'main'), where('authorName', '==', 'Homer Simpson'));
    const privateDishesDocs = await getDocs(privateDishesQuery);
    // console.log('---PRIVATE DISH RESULT', privateDishesDocs);
    // console.log('---DOC', privateDishesDocs.docs[0].data());
    console.log('---PRIVATE DISHES DOCS', privateDishesDocs.docs);

    // privateDishesDocs.forEach(doc => console.log('---DOC', doc.data()));

    ctx.status = 200;
    ctx.body = { ctx_param_author: ctx.params.author, ctx_param_type: ctx.params.type };
  })
  .get('/api/publicDishes/:type', async (ctx) => {
    console.log('---GET ALL PUBLIC DISHES REQ PARAMS', ctx.params.type);

    const publicDishesQuery = query(documents, where('dishType', '==', 'main'));
    const publicDishesDocs = await getDocs(publicDishesQuery);

    ctx.status = 200;
    // ctx.body = { dishes: publicDishesDocs.docs };
    ctx.body = publicDishesDocs.docs;
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
