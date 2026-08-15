import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Diplomas from './components/Diplomas/Diplomas';
import Contacts from './components/Contacts/Contacts';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'; // Импортируем

function App() {
  return (
    <div className="site-wrapper">
      <div className="container">
        <Nav />
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Diplomas />
        <Contacts />
        
        <footer className="footer">
          <p>© 2026 Мария Багирова. Все права защищены.</p>
        </footer>

        {/* Кнопка прокрутки вверх */}
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;