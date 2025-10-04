import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyManufacturer from './components/WhyManufacturer';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import FloatingChatbot from './components/FloatingChatbot';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyManufacturer />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    <FloatingChatbot/>
    < MobileStickyBar/>
    </div>
  );
}

export default App;
