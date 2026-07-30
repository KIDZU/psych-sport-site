import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    id: 1,
    text: "«На сборах мне было намного комфортнее общаться с Марией, чем раньше с другими специалистами. Я смогла открыто говорить о своих переживаниях и получила поддержку именно тогда, когда она была нужна.»",
    author: "Спортсменка, 15 лет",
    role: "Сборная команда по дзюдо"
  },
  {
    id: 2,
    text: "«Благодарим за проведённое занятие с командой. Ребята активно включились в работу, а полученные техники начали использовать уже на тренировках. Очень полезный и понятный материал для спортсменов.»",
    author: "Тренер детской спортивной команды",
    role: "Джиу-джитсу"
  },
  {
    id: 3,
    text: "«Обратились из-за сильного волнения перед соревнованиями. Уже через несколько встреч дочь стала увереннее выходить на выступление и перестала так переживать из-за ошибок, как следствие их количество снизилось.»",
    author: "Мама спортсменки, 12 лет",
    role: "Спортивная гимнастика"
  },
  {
    id: 4,
    text: "«Работали в формате сопровождения в течение месяца. Понравилось, что ребёнок всегда мог обратиться за поддержкой между встречами. Это помогло быстрее справляться с трудными моментами.»",
    author: "Папа спортсмена, 10 лет",
    role: "Хоккей"
  },
  {
    id: 5,
    text: "«Приглашали Марию для проведения занятия с командой. Спортсмены активно участвовали в упражнениях, а темы уверенности и концентрации оказались особенно полезными перед соревнованиями.»",
    author: "Старший тренер команды",
    role: "Дзюдо"
  },
  {
    id: 6,
    text: "«Благодарна Марии за внимательную и тактичную работу с ребёнком. Благодаря занятиям сын смог справиться со страхами, которые мешали ему в спорте, а мне самой стало гораздо спокойнее поддерживать его на этом пути. Очень рада, что обратились именно к Марии.»",
    author: "Мама спортсмена, 8 лет",
    role: "Прыжки в воду"
  },
  {
    id: 7,
    text: "«Сын всегда с нетерпением ждал встречи. Для меня это показатель того, что специалист смог найти контакт с ребёнком. Многие сложные вещи объяснялись простым и понятным языком. После консультаций стало гораздо спокойнее и мне, и ребёнку.»",
    author: "Мама спортсмена, 9 лет",
    role: "Хоккей"
  },
  {
    id: 8,
    text: "«Перед важным стартом удалось значительно снизить волнение, лучше сконцентрироваться и нормально восстановиться перед соревнованиями. Это положительно сказалось на результате, стал чемпионом.»",
    author: "Спортсмен, 18 лет",
    role: "Пауэрлифтинг"
  },
  {
    id: 9,
    text: "«На турнире я получил награду «лучший игрок матча». Спасибо за помощь и поддержку!»",
    author: "Спортсмен, 11 лет",
    role: "Хоккей"
  },
  {
    id: 10,
    text: "«После тренинга ребёнок приехал воодушевлённым и ещё долго рассказывал о занятии. Особенно понравилось, что спортсмены не просто слушали теорию, а участвовали в практических упражнениях и разбирали реальные ситуации из спорта.»",
    author: "Родитель участника группового тренинга",
    role: "Единоборства"
  }
];

const Testimonials = () => {
  return (
    <section className={styles.wrapper} id="testimonials">
      
      <span className={`${styles.outerLabel} ${styles.outerLabelAccent}`}>Отзывы</span>

      <div className={styles.outerContainer}>
        <h2 className={styles.sectionTitle}>Что говорят спортсмены и родители</h2>

          <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          centeredSlides={true} /* ЭТО ВАЖНО! Центрирует слайд внутри каретки */
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
        >
          {testimonialsData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.innerCard}>
                <div className={styles.slideContent}>
                  <span className={styles.quoteMark}>“</span>
                  <p className={styles.testimonialText}>{item.text}</p>
                  <div className={styles.authorWrapper}>
                    <span className={styles.authorName}>{item.author}</span>
                    <span className={styles.authorDesc}>{item.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={`swiper-button-prev ${styles.navBtn} ${styles.navBtnPrev}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
        <div className={`swiper-button-next ${styles.navBtn} ${styles.navBtnNext}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>

        <div className="swiper-pagination"></div>

      </div>
    </section>
  );
};

export default Testimonials;