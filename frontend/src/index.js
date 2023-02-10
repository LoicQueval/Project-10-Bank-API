import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {MainNav} from './components/main-nav/main-nav';
import {Footer} from './components/footer/footer';
import Home from './pages/home/home';
import {SignIn} from './pages/sign-in/sign-in';
import {User} from './pages/user/user';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/sign-in',
        element: <SignIn/>,
    },
    {
        path: '/user',
        element: <User/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <MainNav/>
      <RouterProvider router={router}/>
      <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();