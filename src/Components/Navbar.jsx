import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './utils/Routes';
import { THEME } from './utils/constants';
import { BsSun, BsCloudSunFill } from "react-icons/bs";
import { useGlobalContext } from './utils/global.context';
import { link } from './utils/Styles';

const useNavbar = () => {
  const {globalState: {theme, data}, dispatchGlobalState} = useGlobalContext()

  const handleThemeToggle = () => {  //maneja el cambio de tema
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
    const { handleThemeToggle, getLogoIcon, isDarkMode, navbarClassName } = useNavbar();
    const linkStyles = {
      color: isDarkMode ? 'var(--color-fondo)' : 'var(--color-fondo-dark)',
      ...styles.link
    };

    const iconSize = 30; // Tamaño del icono en píxeles
    const iconColor = isDarkMode ? 'black' : 'white'; // Color del icono
    const iconBackground = isDarkMode ? 'white' : 'black'; // Fondo del icono

    return (
      <nav className={navbarClassName} style={{ display: 'flex', justifyContent: 'flex-end' }} >
        <div style={styles.logoContainer}>
          {getLogoIcon()}
        </div>
        <div style={styles.linksContainer}>
          <Link to={routes.home} className={link} style={linkStyles}>Home</Link>
          <Link to={routes.favs} className={link} style={linkStyles}> Favs </Link>
          <Link to={routes.contact} className={link} style={linkStyles}>Contact</Link>
        </div>
        <div style={styles.themeToggleContainer}>
          <span className="toggle-icon" onClick={handleThemeToggle}>
             {isDarkMode ? (
              <BsCloudSunFill className="sun-icon" style={{ fontSize: iconSize, color: iconColor, backgroundColor: iconBackground }} />
            ) : (
            <BsSun className="moon-icon" style={{ fontSize: iconSize, color: iconColor, backgroundColor: iconBackground }} />
          )}
        </span>
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
