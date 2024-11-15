import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Countries} from './app/pages/Countries';
import {CountryInfo} from './app/pages/CountryInfo';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'antd/dist/reset.css';


function App() {
    const queryClient = new QueryClient();

    return (
      <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country/:countryCode" element={<CountryInfo />} />
        </Routes>
      </Router>
      </QueryClientProvider>
  );
}

export default App;
