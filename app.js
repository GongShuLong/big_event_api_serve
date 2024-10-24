const express = require('express')

const app = express()

// 导入 cors 中间件
const cors = require('cors')
// 将 cors 注册为全局中间件
app.use(cors())

// 配置解析表单数据中间件
app.use(express.urlencoded({ extended: false }))



// 导入并注册用户路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})
