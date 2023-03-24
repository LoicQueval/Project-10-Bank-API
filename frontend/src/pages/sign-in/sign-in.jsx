import './sign-in.scss'
import {userLogin} from '../../services/auth';
import {isError, submitForm} from '../../services/redux';
import {connect, useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

export const SignIn = () => {
    const dispatch = useDispatch();
    const email = useSelector(state => state.email);
    const password = useSelector(state => state.password);
    const error = useSelector(state => state.error);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(submitForm(e.target.username.value, e.target.password.value))
    }

    useEffect(() => {
        if (email && password) {
            userLogin(email, password);
            if (!userLogin.ok) {
                dispatch(isError("Login Account is incorrect"))
            }
        }
    }, [email, password, dispatch]);

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="error-message">{error}</div>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="email" id="username" required/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
}
const mapStateToProps = (state) => {
    return {
        email: state.email,
        password: state.password
    };
};

export default connect(mapStateToProps)(SignIn);
