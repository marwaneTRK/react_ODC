import { useState } from 'react';
import './App.css';
import { AboutPage } from './component/AboutPage';
import { Counter } from './component/Counter';
import { HomePage } from './component/HomePage';
import { Layout } from './component/Layout';
import { ProductList } from './component/ProductList';
import { SerachBar } from './component/SearchBar';
import {  AuthProvider } from './component/AuthContext';

function App() {
    const [query,setQuery]=useState("");
  return (
   <AuthProvider>
    <HomePage />
   </AuthProvider>
  );
}

export default App;
