import './App.css'
import "./App.css"
import { Routes, Route } from 'react-router-dom';
import router from "./router";
import {usestate} from "et"


function App ()  {
  const [carts, setcarts]= usestate([])
  return (
    <>
    <ul>
      <li>
<navlink to='/home' home></navlink>
      </li>
      <li>
<navlink to='/shoppingcart' ShoppingCart></navlink>
      </li>
      <li>
<navlink to='/product' product></navlink>
      </li>
    </ul>
    <Routes>
      <Route path='/home' element={<div>home</div>}/>
      <Route path='/shoppingcart' element={<div>shoppingcart</div>}/>
      <Route path='/product/:id'> element={<div>product</div>}</Route>
      <Route path='*' element={<div>notfound</div>}/>
    </Routes>
      
    </>
  );
}

export default <App></App>
