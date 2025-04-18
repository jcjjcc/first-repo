
import { createRoot } from 'react-dom/client'
// import './inde.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './stores'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
