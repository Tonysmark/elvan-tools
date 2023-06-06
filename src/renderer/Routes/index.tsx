import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';

import { lazy } from 'react';
import WelcomePage from '../Pages/Welcome';

const loadComponent = (path: string) => lazy(() => import(path));
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/tools-index"
          loader={loadComponent('../Pages/ToolIndex')}
        />
      </Routes>
    </Router>
  );
}
