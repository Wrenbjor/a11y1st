import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import Purpose from './components/Purpose/Purpose';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container">
      <Hero />
      <Menu />
      <Purpose />
      <About />
      <Footer />
    </div>
  );
}

export default App;
