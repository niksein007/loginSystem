const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const route = require('./router/login')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/',route)

app.engine('.hbs', hbs({
    defaultLayout:'layout',
    extname:'.hbs'
}))

app.set('view engine', 'hbs')

app.listen(3000,()=>{
    console.log(`login system `);
    
})