'use strict';
let mongoose = require('mongoose');

let CrudSchema = new mongoose.Schema({
  posts:{type:String, default:''},
  team: {type: String, default:''},
  name: {type: String, default:''},
  manager: {type: String, default:''},
  stats: {type: String, default:''},
  ComeUp_year: {type: Number, default:''},
  comeup: {type: String, default:''},
  retirement_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Crud', CrudSchema);
