import React, { useEffect,useState} from "react";
import {
  // es6 模块化 as 
  // BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom"
import routes from "@/router";
import { ConfigProvider} from 'zarm';
// import 'zarm/dist/zarm.css';
import NavBar from "@/components/NavBar";
import s from './App.module.less'


export default function App() {
  const [showNav, setShowNav] = useState(false)
  const needNav = ['/','/data','/user']
  const {pathname} = useLocation()
  useEffect(() => {
    setShowNav(needNav.includes(pathname))
  },[pathname])
  return (
      <ConfigProvider primaryColor="#007fff">
        <div className={s.app}>
          <Routes>
            {
              routes.map(route => <Route key={route.path} path={route.path} element={<route.component />} />)
            }
          </Routes>
          <NavBar showNav={showNav} />
        </div>
      </ConfigProvider>
  )
}