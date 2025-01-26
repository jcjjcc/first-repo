import pkg from 'jsonwebtoken'
const { sign,
  verify,
 } = pkg;

// 密钥
const secret = 'g10bqw2345';

export default [
  {
    url: '/api/getUserInfo',
    method: 'get',
    response: (req, res) => {
      // console.log(req.headers['authorization'].split(' ')[1])
      const token = req.headers['authorization'].split(' ')[1]
      try {
        let decoded = verify(token, secret) //
        console.log(decoded)
        return {
          code: 200,
          data: decoded
        }
      } catch (error) {

      }
      return {
        msg: 'hell'
      }
    }
  },
  {
    url: '/api/login',
    method: 'post',
    timeout: 2000,
    response: (req, res) => {
      let body = req.body
      if (body.name !== 'admin' || body.password !== '123456') {
        return {
          code: 60204,
          message: 'Username or password are incorrect'
        }
      }

      // 签发令牌 token 
      const token = sign({user: body.name}, secret, {
        expiresIn: 60 * 60 * 24 * 7
      })


      return {
        code: 200,
        data: token
      }
    }
  }
]