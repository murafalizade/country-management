import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Countries} from './app/pages/Countries';
import {CountryInfo} from './app/pages/CountryInfo';
import 'antd/dist/reset.css';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country/:countryCode" element={<CountryInfo />} />
        </Routes>
      </Router>
  );
}

export default App;
