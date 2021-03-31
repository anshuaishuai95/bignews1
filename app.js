//创建express 服务器
const express = require('express')
const server = express()


// 跨域
const cors = require('cors')
server.use(cors())

const apiRouter = require('./router/api_router.js')
// const myRouter = require('./router/my_router.js')
server.use('/api', apiRouter)
// server.use('/my', myRouter)
server.listen(3002, () => {
    console.log('服务器已在3002启动');
})