import classes from './Header.module.css';

const Header = (props) => {
  const logoutHandler = () => {
    console.log('logging out...')
  };

  return (
    <header className={classes.header}>
      <h3 className={classes.title}>{props.username}'s Task Board</h3>
      <button className={classes.logout} onClick={logoutHandler}>Logout</button>
    </header>
  );
};

export default Header;
