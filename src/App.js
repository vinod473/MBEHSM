import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import Error from './pages/Error';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import Downloads from './pages/Downloads';
import Result from './pages/Result';
import Examination from './pages/Examination';
import About from './pages/About';
import Electropathy from './pages/Electropathy';
import JoinMBEHSM from './pages/JoinMBEHSM';
import FatherEHP from './pages/FatherEHP';
import Director from './pages/Director';
import Registrar from './pages/Registrar';
import Legal from './pages/Legal';
import Affiliation from './pages/Affiliation';
import Registration from './pages/Registration';
import ScrollToTop from './component/ScrollToTop';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Stats from './pages/Stats';
import AdmissionList from './pages/AdmissionList';
import StudenRegistration from './pages/StudentRegistration';
import GenerateResult from './pages/GenerateResult';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='contactUs' element={<ContactUs />} />
            <Route path='gallery' element={<Gallery />} />
            <Route path='download' element={<Downloads />} />
            <Route path='result' element={<Result />} />
            <Route path='examination' element={<Examination />} />
            <Route path='about' element={<About />} />
            <Route path='electropathy' element={<Electropathy />} />
            <Route path='joinMBEHSM' element={<JoinMBEHSM />} />
            <Route path='father-ehp' element={<FatherEHP />} />
            <Route path='director' element={<Director/>} />
            <Route path='registrar' element={<Registrar/>} />
            <Route path='student' element={<Result />} />
            <Route path='legal' element={<Legal />} />
            <Route path='affiliation' element={<Affiliation />} />
            <Route path='registration' element={<Registration />} />
            <Route path='login' element={<Login />} />
            <Route path='dashboard' element={<Dashboard />}>
              <Route path='stats' element={<Stats />} />
              <Route path='register' element={<StudenRegistration />} />
              <Route path='admissions' element={<AdmissionList />} />
              <Route path='generateResult' element={<GenerateResult />} />
            </Route>
            <Route path='*' element={<Error />} />
          {/*<Route path='about' element={<About />} />

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
