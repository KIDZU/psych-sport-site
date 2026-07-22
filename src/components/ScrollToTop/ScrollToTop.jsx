import { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Отслеживаем скролл
  useEffect(() => {
    const toggleVisibility = () => {
      // Если прокрутили вниз более чем на 300px, показываем кнопку
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Отписка от события при размонтировании компонента
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Функция скролла вверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.button} ${isVisible ? styles.visible : ''}`}
      aria-label="Прокрутить вверх"
    >
      <svg viewBox="0 0 24 24">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
};

export default ScrollToTop;