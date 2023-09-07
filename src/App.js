import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

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
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode has been enabled','success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled','success');
    }
  }
  return (
    <>
{/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
<Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}></Navbar>
<Alert alert={alert}></Alert>
<div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter the text to be analyzed" mode={mode}></TextForm>
</div>
    </>  
  );
}

export default App;
