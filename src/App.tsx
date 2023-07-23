import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Layout from './theme1/components/Layout/Layout';
import Home from './theme1/pages/Home';
import Products from './theme1/pages/Products';
import ProdPage from './theme1/pages/ProdPage';

function App() {

  return (
    <Router>
      <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:productId' element={<ProdPage/>}/>
      </Routes>
      </Layout>
    </Router>
  )
}

export default App
