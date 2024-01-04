// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { Route, Routes} from 'react-router-dom'

function App() {

const[darkmode,setdarkmode] = useState("light");//control for darkmode whether darkmode is enable or not 
const[text,settext] = useState("Enable Lightmode")
const[alertMsg,setalertMsg] = useState(null);
//here alert is object whihch is bydefault null, after that a setalaert method use to set an alert
const[greenbtn,setgreenbtn] = useState("light")

const setalaert = (msg,type)=>{   //this function takes two parameter one is the message to the alert and type of the alert
     setalertMsg({
      message : msg,
      type : type,
     })
     setTimeout(() => {
     setalertMsg(null)
     }, 2000);
}

const toggleMode = ()=>{
  if(darkmode === "dark"){
    setdarkmode("light")
    settext("Enable Darkmode")
    document.body.style.backgroundColor="white";
    setalaert("sucess, Lightmode is enabled","danger")
  }else{
    setdarkmode("dark")
    settext("Enable Lightmode")
    document.body.style.backgroundColor="#042743";
    setalaert("sucess, Darkmode is enabled","primary")
  }
}

const green = ()=>{
  
}
  return (
  <>

  <Navbar title="TextUtils"  mode ={darkmode} toggle={toggleMode} text={text}/> 
  <Alert alert={alertMsg}/>
  <Routes>
    <Route path="/" element={<TextForm  mode ={darkmode}  btn={setalaert}/>}/>
    <Route path='/about' element={<About />}/>
  </Routes>
  
  </>
  );
}

export default App;
