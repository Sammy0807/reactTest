'use strict'

let Crud = require('../models/crud');

module.exports = {
	find: function(params, callback){
		Crud.find(params, function(err, Players){
			if(err){
				callback(err, null)
				return
			}
			callback(null, Players)
		})
},

	findById: function(id, callback){
		Crud.findById(id, function(err, player){
			if(err){
				callback(err, null)
				return
			}
			callback(null, player)
		})
	},
	update: function(id, params, callback){
		Crud.findByIdAndUpdate(id, params, {new:true}, function(err, player){
			if(err){
				callback(err, null)
				return
			}
		callback(null, player)
		})
	},
	create: function(params, callback){
		Crud.create(params, function(err, player){
			if(err){
				callback(err, null)
				return
			}
			callback(null, player)
		})
	},
	delete: function(id, callback){
		Crud.findByIdAndRemove(id, function(err){
			if(err){
				callback(err, null)
				return
			}
		callback(null, null)
		})
	}

}

