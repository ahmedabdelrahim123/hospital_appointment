import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './Header'
import { BrowserRouter ,Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
     <h1> Hospital Appointment </h1>
     {/* <Route path='/Login'>
      <Login />
     </Route>     */}
     </BrowserRouter>
    </div>
  );
}

export default App;
