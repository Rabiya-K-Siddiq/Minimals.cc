import './App.css';
import Home from './components/screens/Home';
import Services from './components/screens/Services';
import DarkMode from './components/screens/DarkMode';
import Products from './components/screens/Products.jsx';
import Footer from './components/screens/Footer';
import Pricing from './components/screens/Pricing';
import ThemeColor from './components/screens/ThemeColor';
import Designs from './components/screens/Designs';
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
    <Helmet>
      <title>Minimals.cc</title>
    </Helmet>
    <Home />
    <Services />
    <Products />
    <DarkMode />
    <ThemeColor />
    <Designs />
    <Pricing />
    <Footer />
    </>
  );
};

export default App;
