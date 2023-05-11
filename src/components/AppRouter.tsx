import React from 'react';
import Dashboard from '../pages/Dashboard/Dashboard';
import CreateTransactionCategoryForm from '../pages/Budget/CreateTransactionCategory/CreateTransactionCategoryForm';
import { Routes, Route } from "react-router-dom"

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="create" element={<CreateTransactionCategoryForm />} />
    </Routes>
  );
}

export default AppRouter;
