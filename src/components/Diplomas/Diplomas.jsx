import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Modal from 'react-modal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Diplomas.module.css';

// Обязательная настройка для react-modal
Modal.setAppElement('#root');

const diplomasData = [
  { id: 1, src: '/Doc1.jpeg', alt: 'Диплом Бакалавра' },
  { id: 2, src: '/Doc2.jpeg', alt: 'Свидетельство "Планета творчества"' },
  { id: 3, src: '/Doc3.jpeg', alt: 'Удостоверение о повышении квалификации' },
  { id: 4, src: '/Doc4.jpeg', alt: 'Диплом Магистра' },
  { id: 5, src: '/Doc5.jpeg', alt: 'Сертификат всероссийская научная конференция' },
  { id: 6, src: '/Doc6.jpeg', alt: 'Сертификат "Человек в мире спорта"' },
  { id: 7, src: '/Doc7.jpeg', alt: 'Благодарность эффективность подготовки спортсменов' },
  { id: 8, src: '/Doc8.jpeg', alt: 'Сертификат "АСП"' },
  { id: 9, src: '/Doc9.jpeg', alt: 'Сертификат "Психологическое общество"' },
  { id: 10, src: '/Doc10.jpeg', alt: 'Свидетельство "Планета творчества"' },
  { id: 11, src: '/Doc11.jpeg', alt: 'Удостоверение "ИМАТОН"' },
  { id: 12, src: '/Doc12.jpeg', alt: 'Сертификат министерства спорта' }
];

const Diplomas = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' });

  const openModal = (src, alt) => {
    setSelectedImage({ src, alt });
    setModalIsOpen(true);
  };
  
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(6px)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    content: {
      position: 'relative',
      top: 'auto',
      left: 'auto',
      right: 'auto',
      bottom: 'auto',
      background: 'transparent',
      border: 'none',
      padding: 0,
      maxWidth: '90vw',
      maxHeight: '90vh',
      overflow: 'hidden',
      borderRadius: '0.5rem'
    }
  };

  return (
    <section className={styles.wrapper} id="diplomas">
      
      <div className={styles.header}>
        <span className={`${styles.label} ${styles.labelAccent}`}>Дипломы и сертификаты</span>
        <h2 className={styles.title}>Моё образование и достижения</h2>
      </div>

      <div className={styles.outerContainer}>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          slidesPerGroup={3}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, type: 'bullets' }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{ 768: { slidesPerView: 3 } }}
        >
          {diplomasData.map((item) => (
            <SwiperSlide key={item.id} className={styles.slide}>
              <img 
                src={item.src} 
                alt={item.alt} 
                className={styles.diplomaImage} 
                onClick={() => openModal(item.src, item.alt)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.customPrev} ref={prevRef}></div>
        <div className={styles.customNext} ref={nextRef}></div>

        <div className="swiper-pagination"></div>

      </div>

      {/* Модальное окно */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Просмотр диплома"
      >
        <button className={styles.modalClose} onClick={closeModal}>×</button>
        <img 
          src={selectedImage.src} 
          alt={selectedImage.alt} 
          className={styles.modalImage} 
        />
      </Modal>

    </section>
  );
};

export default Diplomas;