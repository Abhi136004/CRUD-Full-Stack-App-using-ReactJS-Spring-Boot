import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent.jsx';
import FooterComponent from './components/FooterComponent.jsx';
import ListEmployeeComponent from './components/ListEmployeeComponent.jsx';
import CreateEmployeeComponent from './components/CreateEmployeeComponent.jsx';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent.jsx';
import ViewEmployeeComponent from './components/ViewEmployeeComponent.jsx';

function App() {
  return (
    <Router>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />} />
          <Route path="/employees" element={<ListEmployeeComponent />} />
          <Route path="/add-employee/:id" element={<CreateEmployeeComponent />} />
          <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
          <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} />
        </Routes>
      </div>
      <FooterComponent />
    </Router>
  );
}

export default App;
