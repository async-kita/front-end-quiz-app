import styles from './Header.module.css';
import moon from '../../assets/images/icon-moon-light.svg';
import moonDark from '../../assets/images/icon-moon-dark.svg';
import sun from '../../assets/images/icon-sun-light.svg';
import sunDark from '../../assets/images/icon-sun-dark.svg';
import SubjectItem from '../../components/SubjectItem/SubjectItem.jsx';

function Header({ currentTheme, onClickButtonTheme, selectTopic, reset }) {
  const onClickLogo = () => {
    reset();
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.headerInner} container`}>
        <button className={styles.logo} type={'button'} onClick={() => onClickLogo()}>
          {selectTopic !== null ? (
            <SubjectItem title={selectTopic.title} iconUrl={selectTopic.icon} />
          ) : (
            <></>
          )}
        </button>
        <div className={styles.actions}>
          <img
            className={styles.icon}
            src={currentTheme === 'light' ? sunDark : sun}
            alt=""
            width="24"
            height="24"
          />
          <button
            className={`${styles.button} ${currentTheme === 'dark' ? styles['is-active'] : ''}`}
            onClick={onClickButtonTheme}
            aria-label={currentTheme === 'light' ? 'Toggle theme dark' : 'Toggle theme light'}
            type="button"
          ></button>
          <img
            className={styles.icon}
            src={currentTheme === 'light' ? moonDark : moon}
            alt=""
            width="24"
            height="24"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
