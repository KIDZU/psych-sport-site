import { useState } from 'react';
import styles from './Nav.module.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.brandName}>Мария Багирова</span>
        <span className={styles.brandSub}>Спортивный психолог</span>
      </div>
      
      <button className={styles.burger} onClick={toggleMenu} aria-label="Меню">
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </button>

      <nav className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
        <a href="#about" onClick={closeMenu}>Обо мне</a>
        <a href="#services" onClick={closeMenu}>Услуги</a>
        <a href="#testimonials" onClick={closeMenu}>Отзывы</a>
        <a href="#diplomas" onClick={closeMenu}>Дипломы</a>
        <a href="#contacts" onClick={closeMenu}>Контакты</a>
      </nav>

      <div className={styles.headerActions}>
        <div className={styles.socialIcons}>
          <button className={styles.iconBtn}>
            <i className="fab fa-whatsapp"></i>
          </button>
          <button className={styles.iconBtn}>
            <i className="fab fa-telegram-plane"></i>
          </button>
        </div>
        <button className={styles.btnPrimary}>Записаться на консультацию</button>
      </div>
    </header>
  );
};

export default Nav;