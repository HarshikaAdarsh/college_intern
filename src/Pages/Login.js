import './Login.css';
import Header from '../Common/Header';
import{useState} from 'react';

const Login = () =>{
    let[username,setUsername]=useState("");
    let[password,setPassword]=useState("");
    function showData(){
        alert(username);
        alert(password);
    }
    return(
        <div>
            <Header/>
            <div className='login-base'>
                <div classname='login-main'>
                    <div className='login-heading'>Login</div>
                    <input type='text' className='login' placeholder='Username'
                    onChange={(e)=>setUsername(e.target.value)} value={username}/>
                   <input type='Password' className='login-input' placeholder='Password'
                     onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    <button classNAme='login-button' onclick={showData}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;