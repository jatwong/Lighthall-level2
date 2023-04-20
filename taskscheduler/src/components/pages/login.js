import './login.css';
import logo from '../UI/icons/logo.svg';
import arrow from '../UI/icons/arrowRight.svg';

const Login = () => {

    const sendUsername = () => {
        const username = document.querySelector('.user-input').value;

        if (username !== '') {
            fetch('https://lighthall2-task-tracker-server.hemanth-ks97.repl.co/signup', {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => {
                if (res.status === 200) {
                    return res.json().then((data) => {
                        window.location.href = '/AllTasksList';
                    });
                }
            });
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
                <input className='user-input' type="text" placeholder="Enter your name" />
                <button className='logn-btn' onClick={sendUsername}><img src={arrow} alt='logn-btn'></img></button>
            </div>
        </div>
    );
}

export default Login;