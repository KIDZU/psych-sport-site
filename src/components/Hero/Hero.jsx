import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.wrapper} id="hero">
      <div className={styles.grid}>
        
        <div className={styles.leftCol}>
          <div className={styles.badge}>ПСИХОЛОГИЧЕСКОЕ СОПРОВОЖДЕНИЕ</div>
          <h1 className={styles.title}>
            ПСИХОЛОГИЧЕСКОЕ <br />
            <span className={styles.titleAccent}>СОПРОВОЖДЕНИЕ</span> <br />
            ЮНЫХ СПОРТСМЕНОВ
          </h1>
          <p className={styles.desc}>
            Помогаю детям и подросткам справляться с волнением, повышать уверенность и раскрывать свой потенциал в спорте и жизни.
          </p>
          <div className={styles.buttons}>
            <button className={styles.btnPrimary}>Узнать об услугах →</button>
            <button className={styles.btnOutline}>Записаться на консультацию →</button>
          </div>
        </div>

        <div className={styles.rightCol}>
          <img src="/photo1.jpg" alt="Мария Багрова" className={styles.mainImg} />
          {/* ДОБАВЛЕННЫЙ СЛОЙ ДЛЯ ПРОЗРАЧНОСТИ ПО КРУГУ */}
          <div className={styles.imageOverlay}></div>
        </div>

        <div className={styles.benefitsOverlay}>
          <div className={styles.benefitItem}>
            <span className={styles.benefitIcon}><i className="fas fa-user-check"></i></span>
            <div>
              <span className={styles.benefitTitle}>Индивидуальный подход</span>
              <span className={styles.benefitDesc}>К каждому спортсмену</span>
            </div>
          </div>
          <div className={styles.benefitItem}>
            <span className={styles.benefitIcon}><i className="fas fa-comments"></i></span>
            <div>
              <span className={styles.benefitTitle}>Поддержка 24/7</span>
              <span className={styles.benefitDesc}>Для спортсмена и родителей</span>
            </div>
          </div>
          <div className={styles.benefitItem}>
            <span className={styles.benefitIcon}><i className="fas fa-chart-line"></i></span>
            <div>
              <span className={styles.benefitTitle}>Работа на результат</span>
              <span className={styles.benefitDesc}>Уверенность, фокус, спокойствие</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;