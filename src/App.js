import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbars from './Navbar.jsx'
import Homecarousel from './Carousel';
import UncontrolledExample from './Carousel';
function App() {
  return (
    <BrowserRouter>
    <Navbars />
    <UncontrolledExample />
    </BrowserRouter>
  );
}

export default App;
