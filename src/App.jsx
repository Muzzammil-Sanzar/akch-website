import { Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import ScrollToTop from './utility/ScrollToTop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import MyProfile from './pages/MyProfile';
import ProfileLocation from './pages/ProfileLocation';
import ActiveOrder from './pages/ActiveOrder';
import CompleteOrders from './pages/CompleteOrders';
import ProfileFaqs from './pages/ProfileFaqs';
import HelpSupport from './pages/HelpSupport';

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
            <Route path='location' element={<ProfileLocation />} />
            <Route path='active-orders' element={<ActiveOrder />} />
            <Route path='complete-orders' element={<CompleteOrders />} />
            <Route path='faqs' element={<ProfileFaqs />} />
            <Route path='helpnsupport' element={<HelpSupport />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
