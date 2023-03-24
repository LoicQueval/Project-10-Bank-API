import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {MainNav} from './components/main-nav/main-nav';
import {Footer} from './components/footer/footer';
import Home from './pages/home/home';
import {SignIn} from './pages/sign-in/sign-in';
import {User} from './pages/user/user';
import {Provider} from 'react-redux';
import {rootReducer} from './services/redux';
import {createStore} from 'redux';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <MainNav/>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/login" element={<SignIn/>}/>
                    <Route path="/profile" element={<User/>}/>
                </Routes>
                <Footer/>
            </Router>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
