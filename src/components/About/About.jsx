import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.wrapper} id="about">
      <div className={styles.grid}>
        
        {/* 1. LABEL (Обо мне) */}
        <div className={styles.areaLabel}>
          <span className={`${styles.label} ${styles.labelAccent}`}>Обо мне</span>
        </div>

        {/* 2. TITLE (Заголовок с управляемыми переносами) */}
        <div className={styles.areaTitle}>
          <h2 className={styles.title}>
            Я рядом, чтобы помочь<br />
            вашему ребёнку раскрыть<br />
            свой внутренний потенциал
          </h2>
        </div>

        {/* 3. ФОТОГРАФИЯ */}
        <div className={styles.areaPhoto}>
          <div className={styles.imageWrapper}>
            <img src="/hero.jpg" alt="Мария Багирова" className={styles.mainImg} />
            <div className={styles.imageOverlay}></div>
          </div>
        </div>

        {/* 4. TEXT (Текст под фото) */}
        <div className={styles.areaText}>
          <div className={styles.textContainer}>
            <div className={styles.text}>
              <p>
                Привет, я Багирова Мария Михайловна — спортивный психолог, специализируюсь на работе с детьми и подростками. Мой путь в спорте начался с пяти лет: я мастер спорта по дзюдо, имею более 17 лет опыта в спорте, музыкальном и педагогическом образовании. Я закончила НГУ им. Лесгафта по направлению «Психологическое сопровождение физической культуры и спорта», а также являюсь членом Ассоциации спортивных психологов.
              </p>
              <p>
                Я помогаю юным спортсменам справляться с волнением, повышать уверенность перед соревнованиями и развивать психологическую устойчивость. Мой подход основан на индивидуальной работе, поддержке родителей и совместной работе с тренерами.
              </p>
              <p>
                Я верю, что каждый ребёнок способен не только развиваться физически, но и становиться сильнее эмоционально. Буду рада поддержать вас и вашего ребёнка на пути к спортивным вершинам.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;