const express = require('express')
const router = express.Router()
router.use(express.urlencoded())
// 注册接口
router.post('/reguser', (req, res) => {
    console.log('本次请求的参数是：', req.body);
    res.json({ msg: 'ok' })
})



module.exports = router