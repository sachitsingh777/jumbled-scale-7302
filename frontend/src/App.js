import './App.css';
import { AllRoutes } from './Components/AllRoutes';
import Footer from './Components/Footer';
import { NavBar } from './Components/NavBar';
import ProductCard from './Components/ProductCard';
import SimpleSidebar from './Components/SideBar';
import SingleProductPage from './Components/SingleProductPage';
import Home from './Pages/Home';

function App() {
  return (
    <div>

      {/* <NavBar />
      <AllRoutes />
   <Footer/> */}
   <ProductCard/>
   <SingleProductPage/>

    </div>
  );
}

export default App;
