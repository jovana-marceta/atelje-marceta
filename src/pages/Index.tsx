import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Commissions from '@/components/Commissions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ArtistStudio from '@/components/ArtistStudio';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <ArtistStudio />
        <Gallery />
        <Commissions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
