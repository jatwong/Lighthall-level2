import classes from './Header.module.css';
import Cookies from 'js-cookie';
const Header = (props) => {
  const logoutHandler = () => {
    props.setUser("")
    Cookies.remove("user")
  };

  return (
    <header className={classes.header}>
      <h3 className={classes.title}>{props.username}'s Task Board</h3>
      <button className={classes.logout} onClick={logoutHandler}>Logout</button>
    </header>
  );
};

export default Header;
