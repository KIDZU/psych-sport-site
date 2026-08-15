import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.wrapper} id="hero">
      <div className={styles.grid}>
        
        {/* Элемент 1: Заголовок */}
        <div className={styles.areaHeader}>
          <div className={styles.badge}>ПСИХОЛОГИЧЕСКОЕ СОПРОВОЖДЕНИЕ</div>
          <h1 className={styles.title}>
            ПСИХОЛОГИЧЕСКОЕ <br />
            <span className={styles.titleAccent}>СОПРОВОЖДЕНИЕ</span> <br />
            ЮНЫХ СПОРТСМЕНОВ
          </h1>
        </div>

        {/* Элемент 2: Контент (Текст + Кнопки) */}
         <div className={styles.areaContent}>
          <p className={styles.desc}>
            Помогаю детям и подросткам справляться с волнением, повышать уверенность и раскрывать свой потенциал в спорте и жизни.
          </p>
          <p className={styles.desc}>
            Моя задача — подготовить спортсмена к соревнованиям не только физически, но и ментально. Я помогаю выстроить внутреннюю опору, чтобы спортсмен чувствовал себя уверенно в любой ситуации.
          </p>
          <p className={styles.desc}>
            Работаю в комфортном для вас формате — онлайн или очно.
          </p>
          <div className={styles.buttons}>
            <button className={styles.btnPrimary}>Узнать об услугах</button>
            <button className={styles.btnOutline}>Записаться на консультацию</button>
          </div>
        </div>

        {/* Элемент 3: Плашка с преимуществами */}
        <div className={styles.areaBenefits}>
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

        {/* Элемент 4: Фотография */}
        <div className={styles.areaPhoto}>
          <img src="/photo1.jpg" alt="Мария Багрова" className={styles.mainImg} />
          <div className={styles.imageOverlay}></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;