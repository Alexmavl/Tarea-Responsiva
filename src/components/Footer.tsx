import { FaFacebook,  FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://www.facebook.com/alexito.vasquez1/"><FaFacebook className="w-6 h-6 hover:text-blue-400" /></a>
 
          <a href="https://www.linkedin.com/in/marvin-vasquez-27557397/"><FaLinkedin className="w-6 h-6 hover:text-blue-500" /></a>
        </div>
        <p className="text-sm text-gray-300">© 2025 Vaspe. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
