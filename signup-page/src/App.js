import logo from './logo.svg';
// import './components/Login/login.module.css';
import './App.css';
import ProductCard from './components/Shop/ShopCart.jsx';
import {LoginForm} from './components/Login/Login.jsx'; 
// import { GetProducts } from './utils.js';
  
function App() { 
    return ( 
        <div className="App"> 
            {/* <LoginForm />  */}
            <ProductCard />
        </div> 
    ); 
} 
  
export default App;