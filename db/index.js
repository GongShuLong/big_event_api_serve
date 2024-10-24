const mysql = require('mysql')

// 创建数据库连接对象
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin123',
  database: 'long_db_01'
})

// 开始连接
// db.connect(err => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('mysql connect success')
// })

module.exports = db