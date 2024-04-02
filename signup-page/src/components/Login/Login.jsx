import './login.module.css';
import {useState} from 'react';
// export default function Form() {
const LoginForm =()=> {

    const [isLogin,setIsLogin]= useState(true);
    const email = document.getElementById("newEmail");
    const handleSubmit = () => {
        alert('Successful')
    }
   
    return ( 
        <div className="login-page"> 
            <form className="modal-content animate" > 
            <div className="h1">{isLogin ? 'Login' : 'Sign Up'}</div>
                {!isLogin && <div><label className="label">Name</label><input className="input" type="text"></input></div>} 
                <label className="label">Email</label> 
                <input 
                    className="input"
                    type="email"
                /> 
                <label className="label">Password</label> 
                <input 
                    className="input"  
                    type="password"
                />

                <div >
                    <button className="btn" onClick={()=>handleSubmit()}>{isLogin ? 'Login':'SignUp'}</button>
                </div>
                <div>
                    {isLogin && <div><p>Create new Account,clcik here</p><div className="clickHere" onClick={()=>setIsLogin()}>{!isLogin ? 'Login':'SignUp'}</div></div>}
                    
                </div>
            </form> 
        </div> 
        
    );
};
export {LoginForm}; 
// } 