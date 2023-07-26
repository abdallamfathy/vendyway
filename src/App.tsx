import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Layout from './theme1/components/Layout/Layout';
import Home from './theme1/pages/Home';
import Products from './theme1/pages/Products';
import ProdPage from './theme1/pages/ProdPage';
import AboutPage from './theme1/pages/AboutPage';
import Register from './theme1/pages/Register';
import Login from './theme1/pages/Login';
import Cart from './theme1/pages/Cart';
import Checkout from './theme1/pages/Checkout';
import Success from './theme1/pages/Success';
import Contact from './theme1/pages/Contact';
import UserDashboard from './theme1/pages/UserDashboard';
import Order from './theme1/pages/Order';
import TrackOrder from './theme1/pages/TrackOrder';
import CancelOrder from './theme1/pages/CancelOrder';
import Scroll from './theme1/utils/Scroll';
import MapComponent from './theme1/utils/MapComponent';

function App() {

  return (
    <Router>
      <Scroll>
      <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:productId' element={<ProdPage/>}/>
        <Route path='/about-us' element={<AboutPage/>}/>
        <Route path='/sign-up' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/order-success' element={<Success/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/user-dashboard' element={<UserDashboard/>}/>
        <Route path='/order/:orderId' element={<Order/>}/>
        <Route path='/track-order/:orderId' element={<TrackOrder/>}/>
        <Route path='/cancel-order/:orderId' element={<CancelOrder/>}/>
        <Route path='/map' element={<MapComponent/>}/>
      </Routes>
      </Layout>
      </Scroll>
    </Router>
  )
}

export default App
