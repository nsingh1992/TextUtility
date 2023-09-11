import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter as Router, Routes , Route , Link} from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode= () => {
    if(mode === 'light' && document.getElementById("flexSwitchCheckDefaultForDarkTheme")){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode has been enabled','success');
      document.title = 'TextUtils - Dark Mode';
      setTimeout(() => {
        document.title = 'TextUtils  is amazing';
      }, 2000);
      setTimeout(() => {
        document.title = 'Install TextUtils now';
      }, 1000);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled','success');
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
<Router>
<Navbar title='TextUtils'  aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
<Alert alert={alert}></Alert>
<div className="container my-3">
  <Routes>
    <Route exact path='/about' element={<About/>} />
    <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to be analyzed" mode={mode}/>} />
  </Routes>
</div>
</Router>
    </>  
  );
}

export default App;
