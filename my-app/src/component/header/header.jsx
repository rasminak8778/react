import { useEffect, useState } from 'react';
import './header.css';

function Header(){
    const [count, setCount] = useState(0)
    console.log("RENDERING")
    const handleCount = (value) => {
        setCount(count+value);
        console.group("CLICKING")
    }
    return(
    <header>
         <h1>React Course</h1>
         <p>
            {count} Addition of two numbers.
            <button onClick={() => setCount(count-1)}>Minus</button>
            <button onClick={() => setCount(count+1)}>Plus</button>

         </p>
    </header>
      
    );
    
};
export default Header;