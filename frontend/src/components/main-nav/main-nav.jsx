import './main-nav.scss'
import logo from '../../assets/img/argentBankLogo.png'
import {getUserData, userLogout} from '../../services/auth';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import {getData} from '../../services/redux';

export const MainNav = () => {
    const cookies = document.cookie.split(';');
    const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('access_token='));
    const accessToken = tokenCookie ? tokenCookie.split('=')[1] : null;
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();
    const logoutOnClick = () => {
        userLogout();
    }

    useEffect(() => {
        if (accessToken && data === null) {
            getUserData()
                .then(data => dispatch(getData(data)))
        }
    }, [accessToken, data, dispatch]);

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to={'/'}>
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            {!accessToken && (
                <div>
                    <Link className="main-nav-item" to={'/login'}>
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            )}
            {accessToken && data && (
                <div className="main-nav-flex">
                    <Link className="main-nav-item" to={'/profile'}>
                        <i className="fa fa-user-circle"></i>
                        {data.firstName}
                    </Link>
                    <Link className="main-nav-item" to={'/'} onClick={logoutOnClick}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div>
            )}
        </nav>
    );
}


