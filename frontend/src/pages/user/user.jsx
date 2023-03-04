import './user.scss'
import {useEffect} from 'react';
import {getUserData, putUserData} from '../../services/auth';
import {connect, useDispatch, useSelector} from 'react-redux';
import {editable, getData, putData} from '../../services/redux';

export const User = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const firstName = useSelector(state => state.firstName);
    const lastName = useSelector(state => state.lastName);
    const edit = useSelector(state => state.edit);

    useEffect(() => {
        getUserData()
            .then(data => dispatch(getData(data)))
    }, []);

    useEffect(() => {
        if (firstName || lastName) {
            putUserData(firstName, lastName);
        }
    }, [firstName, lastName]);

    const editOnClick = () => {
        dispatch(editable(!edit));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const inputFirstName = e.target.firstName.value;
        const inputLastName = e.target.lastName.value;
        dispatch(putData(inputFirstName, inputLastName));
    }

    return (
        <main className="main bg-dark">{
            data && (<>
                {edit && (
                    <div className="header">
                        <h1>Welcome back</h1>
                        <form onSubmit={onSubmit}>
                            <div className="header-inputs">
                                <input id="firstName" placeholder={data.firstName}/>
                                <input id="lastName" placeholder={data.lastName}/>
                            </div>
                            <div>
                                <button className="edit-button" type={'submit'}>Save</button>
                                <button className="edit-button" onClick={editOnClick}>Cancel</button>
                            </div>
                        </form>
                    </div>
                )}
                {!edit && (
                    <div className="header">
                        <h1>Welcome back<br/>{data.firstName} {data.lastName}!</h1>
                        <button className="edit-button" onClick={editOnClick}>Edit Name</button>
                    </div>
                )}
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </>)
        }
        </main>
    );
}
const mapStateToProps = (state) => {
    return {
        data: state.data,
        firstName: state.firstName,
        lastName: state.lastName,
        edit: state.edit,
    };
};
export default connect(mapStateToProps)(User);
