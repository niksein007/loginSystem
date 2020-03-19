const {Router} = require('express')
const UserSchema = require('../models/users')
require('../lib/dbConnect')

const login = Router()



login.get('/', (req ,res)=>{
    const user = new UserSchema ({
        name:'david',
        email:'david@gmail.com',
        password:'password'
    
    })
    
    user.save()
res.render('index')
})

login.post('/', (req,res)=>{
res.render('index')
})

module.exports = login