'use strict'
let CrudCont = require('../models/crud')
let UserCont = require('../models/user')

module.exports = {
	user: UserCont,
	crud: CrudCont
}
