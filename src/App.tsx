import Header from './components/Header';
import CardSection from './components/CardSection';
import Footer from './components/Footer';
import './index.css'; 

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Bienvenido a la Tienda de Dylan</h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Descubre nuestros servicios, artículos y más. Todo en un solo lugar.
        </p>
        <CardSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
