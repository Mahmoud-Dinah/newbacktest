'use strict'

const express = require('express')
const app = express()
require('dotenv').config();
const PORT = process.env.PORT;
const cors = require('cors');
const axios = require('axios')
app.use(express.json());
app.use(cors());
const mongoose = require('mongoose');
const {getHeroApiData} = require ('./controllers/api.data.controller')
const {creatFavHero , getFaveHero, deleteFavHero, updateFavHero} = require ('./controllers/api.crud.controller')


mongoose.connect('mongodb://localhost:27017/hero' , { 
    
useNewUrlParser: true, useUnifiedTopology: true });


app.get('/', (req, res)=>{
    res.send('proof of life')
});

app.get('/allhero', getHeroApiData)
app.post('/allhero/fav', creatFavHero)
app.get('/allhero/fav', getFaveHero)
app.delete('/allhero/fav/:name', deleteFavHero)
app.put('/allhero/fav/:name', updateFavHero)



app.listen(PORT, ()=>{
    console.log(`Server run on ${PORT}`);
});