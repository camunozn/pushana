import React from 'react';
import ButtonMobile from '../../atoms/button-mobile/ButtonMobile';
import styles from './Navbar.module.css';

const Navbar = props => {
  const handleScroll = (e, targetId) => {
    // 1. Prevent the default <a> tag "jump" behavior
    e.preventDefault();

    // 2. Remove the '#' from the string to get the actual ID
    const id = targetId.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      // 3. Scroll to the element smoothly
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    // 4. Only toggle if the function exists AND the menu is currently open
    if (props.toggleNav && props.openNav) {
      props.toggleNav();
    }
  };

  return (
    <nav>
      <a
        href="hero"
        className={styles['nav-logo']}
        onClick={e => handleScroll(e, 'hero')}
        style={{ cursor: 'pointer' }}
      >
        Pushana
      </a>
      <ul
        className={`${styles['nav-links']} ${props.openNav && styles.visible}`}
      >
        {props.linksList.map(link => (
          <li key={link.name}>
            <a
              href={link.link}
              onClick={e => handleScroll(e, link.link)}
              style={{ cursor: 'pointer' }}
            >
              {link.name}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#cta-final"
            className={styles['nav-cta']}
            onClick={e => handleScroll(e, 'cta-final')}
            style={{ cursor: 'pointer' }}
          >
            Conversemos
          </a>
        </li>
      </ul>
      <ButtonMobile buttonHandler={props.toggleNav} openNav={props.openNav} />
    </nav>
  );
};

export default Navbar;
