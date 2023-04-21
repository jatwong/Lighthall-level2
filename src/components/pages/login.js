import './login.css';
import logo from '../UI/icons/logo.svg';
import arrow from '../UI/icons/arrowRight.svg';
import Cookies from 'js-cookie';
const Login = (props) => {

    const sendUsername = () => {
        const username = document.querySelector('.user-input').value;

        if (username !== '') {
            fetch('https://servering.jayraval20.repl.co/signup', {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => {
                if (res.status === 200) {
                    props.setUser(username)
                    Cookies.set("user", username, {expires: 7})
                }
            });
        }
    }

    const handleKeyUp = (e) => {
        if (e.keyCode === 13 || e.key === 'Enter') {
            sendUsername()
        }
    }

    return (
        <div className="login-page">
            <div className="proj-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className='proj-txt'>
                <h1 className='txt'>Keep your tasks on track!</h1>
            </div>
            <div className='proj-username'>
                <input onKeyUp={handleKeyUp} className='user-input' type="text" placeholder="Enter your name" />
                <button className='logn-btn' onClick={sendUsername}><img src={arrow} alt='logn-btn'></img></button>
            </div>
        </div>
    );
}

export default Login;