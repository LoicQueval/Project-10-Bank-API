import './main-nav.scss'
import logo from '../../assets/img/argentBankLogo.png'
import {userLogin, userLogout} from '../../services/auth';

export const MainNav = () => {
    const cookies = document.cookie.split(';');
    const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('access_token='));
    const accessToken = tokenCookie ? tokenCookie.split('=')[1] : null;

    const logoutOnClick = (e) => {
        userLogout()
    }

    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href={'/'}>
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            {!accessToken && (
                <div>
                    <a className="main-nav-item" href={'/login'}>
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </a>
                </div>
            )}
            {accessToken && (
                <div className="main-nav-flex">
                    <a className="main-nav-item" href={'/profile'}>
                        <i className="fa fa-user-circle"></i>
                        Tony
                    </a>
                    <a className="main-nav-item" href={'/'} onClick={logoutOnClick}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </a>
                </div>
            )}
        </nav>
    );
}


