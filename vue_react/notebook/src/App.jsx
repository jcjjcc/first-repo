import React, { useEffect,useState} from "react";
import {
  // es6 模块化 as 
  // BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom"
import routes from "@/router";

// import 'zarm/dist/zarm.css'; // vite-plugin-style-import自动导入css样式

import NavBar from "@/components/NavBar";
import s from './App.module.less'
// import { getUserInfo } from "./utils";

export default function App() {
  const [showNav, setShowNav] = useState(false)
  const needNav = ['/','/data','/user']
  //拿到当前url路径，与需要显示NavBar的组件对比
  const {pathname} = useLocation()
  useEffect(() => {
    setShowNav(needNav.includes(pathname))
  },[pathname])
  // useEffect(()=>{
  //   getUserInfo()
  // },[])
  return (
        <div className={s.app}>
          <Routes>
            {
              routes.map(route => <Route key={route.path} path={route.path} element={<route.component />} />)
            }
          </Routes>
          <NavBar showNav={showNav} />
        </div>
  )
}