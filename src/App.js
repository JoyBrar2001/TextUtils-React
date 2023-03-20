import './App.css';
import Alert from './components/Alert';
import { useState } from 'react';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
// import { type } from '@testing-library/user-event/dist/type';
// import Counter from './components/Counter';

// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
// } from 'react-router-dom';


function App() {

    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState({ msg: "", type: "" });

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setAlert({ msg: "", type: "" });
        }, 2000);
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'black';
            showAlert("Dark mode has been enabled", "success");
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success");
        }
    }

    return (
        <>
                <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
            <div className="container my-3">
                <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />
            </div>


            {/* <Router> */}
            {/* <Routes>

                    <Route path='/' element = {<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />}/>
                        
                    <Route path='/about' element = {<About/>}/>
                        
                </Routes> */}
            {/* </Router> */}
        </>
    );
}

export default App;
