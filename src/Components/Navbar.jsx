import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './utils/Routes';
import { THEME } from './utils/constants';
import { BsSun, BsCloudSunFill } from "react-icons/bs";
import { useGlobalContext } from './utils/global.context';

const useNavbar = () => {
  const {globalState: {theme, data}, dispatchGlobalState} = useGlobalContext()

  const handleThemeToggle = () => {
      // document.body.classList.toggle('dark');
      dispatchGlobalState({
          type: "SWITCH_THEME",
          payload: theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
      })
  };

  const getLogoIcon = () => {
      if (theme === 'light') {
          return (
              <div>
                  <i className={BsSun}></i>
                  <i className={BsCloudSunFill}></i>
              </div>
          );
      } else if (theme === 'dark') {
          return (
              <div>
                  <i className={BsSun}></i>
                  <i className={BsCloudSunFill}></i>
              </div>
          );
      }
      return null;
  };

  const isDarkMode = theme === THEME.DARK ?? THEME.LIGHT
  const navbarClassName = `navbar ${theme}`;

  return {handleThemeToggle, getLogoIcon, isDarkMode, navbarClassName}
}

const Navbar = () => {
    const {handleThemeToggle, getLogoIcon, isDarkMode, navbarClassName} = useNavbar()

    return (
        <nav className={navbarClassName}>
            <div style={styles.logoContainer}>
                {getLogoIcon()}
            </div>
            <div style={styles.linksContainer}>
                <Link to={routes.home} className="link" style={{
                    color: isDarkMode ? 'var(--color-fondo)' : 'var(--color-fondo-dark)',
                    ...styles.link
                }}>
                    Home
                </Link>
                <Link to={routes.favs} className="link" style={{
                    color: isDarkMode ? 'var(--color-fondo)' : 'var(--color-fondo-dark)',
                    ...styles.link
                }}>
                    Favs
                </Link>
                <Link to={routes.contact} className="link" style={{
                    color: isDarkMode ? 'var(--color-fondo)' : 'var(--color-fondo-dark)',
                    ...styles.link
                }}>
                    Contact
                </Link>
            </div>
            <div style={styles.themeToggleContainer}>
                <input
                    type="checkbox"
                    className="checkbox"
                    id="checkbox"
                    onChange={handleThemeToggle}
                />
                <label htmlFor="checkbox" className="checkbox-label"style={{backgroundColor: isDarkMode ? "white" : "black"}}>
                    <i className={BsCloudSunFill} style={{color: "black"}}></i>
                    <i className={BsSun} style={{color: "white"}}></i>
                    <span className="ball" style={{backgroundColor: isDarkMode ? "black" : "white"}}></span>
                </label>
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem 1rem 2rem',
        width: '100vw',
        backgroundColor: 'var(--color-nav-fondo)',
        borderBottom: '2px solid var(--color-secundario)',
        transition: 'var(color-nav-dark) 0.5s',
    },
    logoContainer: {
        marginRight: '2rem',
    },
    logo: {
        color: 'var(--color-texto)',
        transition: 'color 0.5s',
    },
    linksContainer: {
        color: 'var(--color-secundario)',
        display: 'flex',
        flexDirection: 'row',
        gap: '2rem',
        transition: 'color 0.5s',
    },
    link: {
        cursor: 'pointer',
        textDecoration: 'none',
        margin: '5px',
        transition: 'color 0.5s',
    },
    themeToggleContainer: {
        marginLeft: 'auto',
    },
};

export default Navbar;
