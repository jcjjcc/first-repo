import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//根据视口的宽度自动调整html的font-size
//方便使用rem单位
import 'lib-flexible/flexible.js'
// 引入 Vant UI 样式
import 'vant/lib/index.css'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

createRoot(document.getElementById('root')).render(

    <Router>
      <App />
    </Router>

)
