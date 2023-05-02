import styles from './Header.module.css';

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  }
  return (
    <header style ={headerStyle} className={styles.header}>
      <h1>Todo-App</h1>
    </header>
  );
};
export default Header;
