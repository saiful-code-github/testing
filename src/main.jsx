import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.min.css";
// import TikTakTeoApp from './TikTakTeo/TikTakTeoApp.jsx';
// import TikTakTeoApp2 from './TIkTakTeo2/TikTakTeoApp';
import TikTakTeopApp3 from './TikTakTeo3/TikTakTeoApp.jsx';
createRoot(document.getElementById('root')).render(
    <div>
      {/* <App />
      <TikTakTeoApp/>
      <TikTakTeoApp2/> */}
      <TikTakTeopApp3/>
    </div>
)
