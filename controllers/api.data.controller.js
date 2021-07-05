'use strict'

const axios = require('axios');
const express = require('express');

const getHeroApiData = (req, res) => {
    const url = `https://digimon-api.vercel.app/api/digimon`;
    axios.get(url).then((data)=>{
        res.send(data.data)
    }).catch((error)=>{
        res.send(error);
    })
}

module.exports ={
    getHeroApiData
}