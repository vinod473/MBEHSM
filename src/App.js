import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import Error from './pages/Error';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import Downloads from './pages/Downloads';
import Result from './pages/Result';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='contactUs' element={<ContactUs />} />
            <Route path='gallery' element={<Gallery />} />
            <Route path='download' element={<Downloads />} />
            <Route path='result' element={<Result />} />
            <Route path='*' element={<Error />} />
          {/*<Route path='about' element={<About />} />

          <Route path='products' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>

          <Route path='login' element={<Login setUser={setUser}></Login>} />
          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
