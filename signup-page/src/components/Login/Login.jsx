import './login.css';
import {useRef, useState} from 'react';
import { useNavigate } from "react-router-dom";

const LoginForm =()=> {

    const [isLogin,setIsLogin] = useState(true);
    const [error,setError] = useState(false);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigator = useNavigate();

    const handleSubmit = () => {
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            const storedPassword = localStorage.getItem(email);
            
            
            if (isLogin) {
                if (password === storedPassword) {
                    navigator("/products");
                }
                else {
                    alert('Invalid Password');
                    setError(true)
                    
                }
                }
            else{
                if (storedPassword){
                    alert('The Same Account id already existing!!!')
                } 
                else{
                    localStorage.setItem(email, password);
                    setError(false)
                    navigator("/products");
                    
                    
                }   
            }    
    }; 
    
    return ( 
        <div className="login-page" > 
        <div className="modal-content animate">
            <div className="h1">{isLogin ? 'Login' : 'Sign Up'}</div>
                {!isLogin && <div><label className="label">Name</label><input className="input" type="text"></input></div>} 
                <label className="label">Email</label> 
                <input
                    className="input"
                    type="email" 
                    required
                    ref={emailRef}
                />
                <label className="label">Password</label> 
                <input 
                    className="input"  
                    required    
                    type="password" ref={passwordRef} style={{outline:error &&'2px solid red'}}
                />
                <div >
                    <button className="btn" onClick={handleSubmit}>{isLogin ? 'Login':'SignUp'}</button>
                </div>
                <div>
                    {isLogin ?  (
                        <div>
                            You can Create New Account!
                            <button className="btn1" onClick={()=>setIsLogin(false)}>
                                {!isLogin ? 'Login':'SignUp'}
                            </button>
                        </div>) :
                        <div>
                            Already Signed Up?
                            <button className="btn1" onClick={()=>setIsLogin(true)}>   
                                {!isLogin ? 'Login':'SignUp'}
                            </button>
                        </div>
                        }
                </div>
            </div>
        </div> 
        
    );
};
export {LoginForm};  

