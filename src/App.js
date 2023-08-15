import logo from './logo.svg';
import Home from "./Home";
import { Route,Routes } from "react-router-dom";
import Loign from "./Pages/Login.js";
import Signup from "./Pages/Signup";

const App = () =>{
  let data = [
      {
          name:"User Singh",
          email:"user@gmail.com",
          contact:909090909,
          city:"Lucknow"
      },
      {
          name:"Aman Singh",
          email:"aman@gmail.com",
          contact:909000099,
          city:"Kanpur"
      },
      {
          name:"Asif",
          email:"asif@gmail.com",
          contact:909888888,
          city:"Delhi"
      }
  ];

  return(
      <>
          <Routes>
              <Route path="/" element={ <Home user={data} /> } />
              <Route path="/login" element={ <Loign /> } />
              <Route path="/signup" element={ <Signup /> } />
          </Routes>
          
      </>
  );
}

{/*}
function App() {
  return (
    {/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <>
    <Routes>
      <Route path="/" element={<Home user={data}/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    
    </>
  );
}*/}

export default App;
