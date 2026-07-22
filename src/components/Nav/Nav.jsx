import styles from './Nav.module.css';

const Nav = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.brandName}>Мария Багирова</span>
        <span className={styles.brandSub}>Спортивный психолог</span>
      </div>
      
      <nav className={styles.navLinks}>
        <a href="#about">Обо мне</a>
        <a href="#services">Услуги</a>
        <a href="#testimonials">Отзывы</a>
        <a href="#diplomas">Дипломы</a>
        <a href="#">Контакты</a>
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