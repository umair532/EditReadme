import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import PetList from './components/PetList.jsx';
import PetDetails from './components/PetDetails.jsx';
import SearchForm from './components/SearchForm.jsx';
import { PetProvider } from './contexts/PetContext.jsx';

const App = () => (
  <PetProvider>
    <Router>
      <ErrorBoundary>
        <SearchForm />
        <Routes>
          <Route path="/" element={<PetList />} />
          <Route path="/pet/:id" element={<PetDetails />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  </PetProvider>
);

export default App;
