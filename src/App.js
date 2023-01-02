import logo from './logo.svg';
import './App.css';
import { Routes,Route} from 'react-router-dom';
import {Home} from './Component/Home'
import { About } from './Component/About';
import { NavBar } from './Component/NavBar';
import { Services } from './Component/Services';
import { Footer } from './Component/Footer';
import { Navbar1 } from './Create compt/Navbar1';
import { Home1 } from './Create compt/Home1';
import { Card1 } from './Component/Card1';
import Button1 from './Button/Button1';
import {Product} from './Button/Product';
import Function_compt from './All_Component/Function_compt';
import NavigationBar from './Website_timepass/NavigationBar';




function App() {
  return (
    <div className="App">
      {/* <NavBar/>
      <Routes> */}
        {/* <Route path='/home'element={<Home/>}></Route>

        <Route path='/about'element={<About/>}></Route>

        <Route path='/service'element={<Services/>}></Route>
         */}
         {/* <Route path='/card' element={<CardShow/>}></Route> */}
      {/* </Routes>
      <Footer/> */}

      {/* <Routes>

        <Route path=''></Route>

      </Routes> */}

      {/* <Navbar1/> */}
      {/* <Home1/> */}
      {/* <Routes>
        <Route path='/card1' element={<Card1/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
      </Routes>
      <Button1/> */}
      {/* <Function_compt/> */}


      <NavigationBar/>
    </div>
  );
}

export default App;
