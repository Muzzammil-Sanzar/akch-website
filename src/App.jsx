import { Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import ScrollToTop from './utility/ScrollToTop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import MyProfile from './pages/MyProfile';

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='product' element={<ProductDetails />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='profile' element={<Profile />} >
            <Route index element={<MyProfile />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
