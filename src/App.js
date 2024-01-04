// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {

const[darkmode,setdarkmode] = useState("light");//control for darkmode whether darkmode is enable or not 
const[text,settext] = useState("Enable Lightmode")
const toggleMode = ()=>{
  if(darkmode === "dark"){
    setdarkmode("light")
    settext("Enable Darkmode")
    document.body.style.backgroundColor="white";
  }else{
    setdarkmode("dark")
    settext("Enable Lightmode")
    document.body.style.backgroundColor="#042743";
  }
}
  return (
  <>
  <Navbar title="TextUtils"  mode ={darkmode} toggle={toggleMode} text={text}/> 
  <Alert alert="This is alert" />
  <TextForm  mode ={darkmode}/>
  {/* <About /> */}
  </>
  );
}

export default App;
