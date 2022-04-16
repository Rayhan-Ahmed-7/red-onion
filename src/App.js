import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home/Home';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Breakfast from './components/Home/Meals/Breakfast/Breakfast';
import { createContext } from 'react';
import useMeals from './Hooks/useMeals';
import Lunch from './components/Home/Meals/Lunch/Lunch';
import Dinner from './components/Home/Meals/Dinner/Dinner';
import NotFound from './components/NotFound/NotFound';
export const Context = createContext();
function App() {
  const [meals] = useMeals();
  console.log(meals);
  return (
    <div className="App">
      <Context.Provider value={meals}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route path='/' element={<Breakfast></Breakfast>}></Route>
          <Route path='lunch' element={<Lunch></Lunch>}></Route>
          <Route path='dinner' element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      </Context.Provider>
      <Footer></Footer>
    </div>
  );
}

export default App;
