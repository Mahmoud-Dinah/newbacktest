'use sstrict'

const axios = require('axios');
const express = require('express');
const heroOneModel = require('../models/hero.model');

const creatFavHero =  async (req, res) =>{
    const {name,img,level} = req.body;
    heroOneModel.find({name:name}, (error, data) => {
        if (data.length > 0){
            res.send('data already exist')
        }else { 
            const newHero = new heroOneModel ({
                name:name , img:img , level:level
            });
            newHero.save();
            res.send('new hero has been added')
        }
    });
}


const getFaveHero = async (req, res) => {
    heroOneModel.find({}, (error, data)=>{
        res.send(data)
    });
}

const deleteFavHero = async (req, res) => {
    const name = req.params.name;

    heroOneModel.remove({name:name} , (error, data)=>{
        if (error){
            res.send(error)
        }else {
            heroOneModel.find({}, (error, data)=>{
                res.send(data)
            });
        }
    });
}

const updateFavHero = async (req, res) => {
    const name = req.params.name;
    const {level}=req.body;
    heroOneModel.findOne({name:name}, (error, data)=>{
        if (error){
            res.send(error)
        }else {
            
            data.level = level;
            data.save().then(() => {
                heroOneModel.find({}, (error, data)=>{
                    res.send(data)
                });
            })
           
            
        }
    })
}





module.exports ={creatFavHero , getFaveHero , deleteFavHero, updateFavHero};