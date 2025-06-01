import Header from './components/Header';
import HeroSection from './components/HeroSection';
import logo from './assets/images/logo.webp';
import productImage from './assets/images/product-image.webp';

function App() {
const targetDate = new Date(new Date().getTime() + 6 * 60 * 60 * 1000);
  return (
    <>
      <Header logoSrc={logo} targetDate={targetDate} />
      <main>
        <HeroSection
          productImageUrl={productImage}
          ctaLink="https://noorhairoffers.com/skin-cream/offers"
        />
      </main>
    </>
  );
}

export default App
