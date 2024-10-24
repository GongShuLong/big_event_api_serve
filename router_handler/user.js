const db = require('../db/index')

// 导入加密处理
const bcrypt = require('bcryptjs')
// 注册处理函数
exports.regUser = (req, res) => {
  // 接收表单数据
  const userinfo = req.body
  // res.send(req.body)
  // 判断数据是否合法
  if (!userinfo.username || !userinfo.password) {
    return res.send({ status: 1, message: '用户名或密码不能为空！' })
  }
  // 查询用户名是否被占用
  const sqlStr = 'select * from ev_users where username=?'
  db.query(sqlStr, userinfo.username, (err, results) => {
    if (err) return res.send({ status: 1, message: err.message })
    if (results.length > 0) {
      return res.send({ status: 1, message: '用户名被占用，请更换其他用户名！' })

    }
    // 用户名可用，继续后续操作
    // 对密码进行加密处理
    userinfo.password = bcrypt.hashSync(userinfo.password, 10)
    // 插入新用户
    const sql = 'insert into ev_users set ?'
    db.query(sql, userinfo, (err, results) => {
      if (err) return res.send({ status: 1, message: err.message })
        if (results.affectedRows !== 1) {
          return res.send({ status: 1, message: '注册用户失败，请稍后再试！' })
        }
    })

    // 注册成功
  })
  res.send({
    status: 0,
    message: '注册成功！',
    data: userinfo
  })
}

// 登陆处理函数
exports.login = (req,res) => {
  res.send({
    status: 0,
    message: '登陆成功！'
  })
}