import React, { useState, useEffect } from "react"
import s from './style.module.less'
import { useNavigate } from "react-router-dom"
import {
  Cell,
  Field,
  Button,
  Dialog
} from 'vant';
import { getUserInfo } from '@/utils'

const User = () => {
  const [signature, setSignature] = useState('')
  const [showSignatureModal, setShowSignatureModal] = useState(false)
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: 'admin',
  }) 
  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  // useEffect(() => {
  //   if (!localStorage.getItem('token')) {
  //     navigate('/login') 
  //   }
  //   getUserInfo()
  // },[])
  return (
    <div className={s.user}>
      <div className={s.head}>
        <div className={s.info}>
          <span>昵称：{user.username}</span>
          <span>
            <img
              style={{ width: 30, height: 30, verticalAlign: '-10px' }}
              src="//s.yezgea02.com/1616032174786/cryptocurrency.png"
              alt=""
            />
            <b onClick={() => setShowSignatureModal(true)}>这个家伙很懒，什么都没有留下</b>
          </span>
        </div>
        <img
          src="https://p26-passport.byteacctimg.com/img/user-avatar/06b83e3cfbde35bd2e711fb625da50da~200x200.awebp" alt=""
          className={s.avatar}
          style={{ width: 60, height: 60, borderRadius: 8 }}
        />
      </div>
      <div className={s.content}>
        <Cell
          isLink
          title="用户信息修改"
          onClick={() => { navigate('/userinfo') }}
          icon={<img style={{ width: 20, verticalAlign: '-7px' }} src="//s.yezgea02.com/1616032174786/cryptocurrency.png" />}
        />
        <Cell
          isLink
          title="重置密码"
          onClick={() => { navigate('/about') }}
          icon={<img style={{ width: 20, verticalAlign: '-7px' }} src="//s.yezgea02.com/1616032174786/cryptocurrency.png" />}
        />
        <Cell
          isLink
          title="关于我们"
          onClick={() => { navigate('/about') }}
          icon={<img style={{ width: 20, verticalAlign: '-7px' }} src="//s.yezgea02.com/1616032174786/cryptocurrency.png" />}
        />
      </div>
      <Button className={s.logout} block type="danger" onClick={logout}>退出登录</Button>
      {/* 修改签名 */}
      <Dialog
        title="修改签名"
        show={showSignatureModal}
        onClose={() => setShowSignatureModal(false)}
        showCancelButton
        showConfirmButton
        onConfirm={() => {
          // 处理确认逻辑
          setShowSignatureModal(false)
        }}
      >
        <Field
          maxlength={50}
          type="textarea"
          rows={3}
          value={signature}
          onChange={(value) => setSignature(value)}
          placeholder="请输入签名"
        />
      </Dialog>
    </div>
  )
}

export default User