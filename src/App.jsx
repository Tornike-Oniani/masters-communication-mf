import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import UserDashboardPage from './pages/user-dashboard-page/user-dashboard.component';

import './app.css';
import TasksPage from './pages/tasks-page/tasks-page.component';

const App = ({ onNavigate }) => {
  const location = useLocation();
  useEffect(() => {
    if (onNavigate) {
      onNavigate(location.pathname);
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/dashboard/*" element={<UserDashboardPage />} />
    </Routes>
  );
};

export default App;
