require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const {NODE_ENV} = require('./config')
const auth = require('./auth')
const bookmarksRouter = require('./bookmarksRouter')
const errorHandler = require('./errorHandler.js')

const app = express()


app.use(morgan((NODE_ENV === 'production')
? 'tiny'
: 'common', {skip: ()=>NODE_ENV === 'test'}))
app.use(cors())
app.use(helmet())
app.use(auth)

app.use(bookmarksRouter)

app.use(errorHandler)

module.exports = app