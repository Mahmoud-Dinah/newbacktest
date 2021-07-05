'use strict'

const mongoose = require('mongoose');

const heroOneSchema = mongoose.Schema({

    name: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
          },

    img: String,
    level: String
})

const heroOneModel = mongoose.model('hero_Schema', heroOneSchema)

module.exports = heroOneModel;