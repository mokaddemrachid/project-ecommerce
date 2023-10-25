import { Route, Routes } from 'react-router-dom';
import Navs from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Components/register/Signup';
import Homme from './Components/Homme/Homme'
import Femme from './Components/Femme/Femme';
import Enfant from './Components/Enfant/Enfant';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import SignIn from './Components/register/SignIn';
import Nouv from './Components/Nouveautes/Nouv';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import Panier from './Components/Cart/Panier';
import Admin from './Components/admin/Admin';
import Favoris from './Components/Favoris/Favoris';
import Succes from './Components/Succes';
import Cancel from './Components/Cancel';


function App() {
  return (
    <div className="App">
        
        <Navs />
        
      
   
  
        <Routes>
          <Route path='/' element={<Home />}/>
            <Route path='/Nouveautés' element={<Nouv />}></Route>
            <Route path="/Signup" element={<Signup />}/>
            <Route path="/Signin" element={<SignIn />}/>
            <Route path='/panier' element={<Panier />}/>
            <Route path='/favoris' element={<Favoris />} />
            <Route path="/Homme" element={<Homme />}/>
            <Route path='/admin' element={<Admin />} />
            <Route path="/Femme" element={<Femme />}/>
            <Route path="/Enfant" element={<Enfant />}/>
            <Route path="/:id" element={<SingleProduct />} />
            <Route path='/success' element={<Succes />}/>
            <Route path='/cancel' element={<Cancel />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
