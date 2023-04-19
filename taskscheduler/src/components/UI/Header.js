import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h3 className={classes.title}>Name's Task Board</h3>
      <button className={classes.logout}>Logout</button>
    </header>
  );
};

export default Header;
