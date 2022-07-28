import './App.css';
import Header from './Components/Header';
import MainComponent from './Components/MainComponent';
// import { useEffect,useState } from 'react';
// import axios from 'axios';



function App() {
  // var [flag,setFlag] = useState(false);
  // useEffect(()=>{
  //   setFlag(true);
  //   axios.get('http://localhost:4001/app/').then((res)=>{
  //     setFlag(false);
  //     console.log(res.data.msg);
  //   })
  // },[])

  return (
    <>
    {/* {
      flag === true ? 
                <div className = "LoadContainer" style={{"zIndex":"3"}}>
                  <div className="spinner-box">
                    <div className="pulse-container">  
                      <div className="pulse-bubble pulse-bubble-1"></div>
                      <div className="pulse-bubble pulse-bubble-2"></div>
                      <div className="pulse-bubble pulse-bubble-3"></div>
                    </div>
                  </div>
                </div>
                : */}
                <div>
                  <Header heading = "Toxic Comment Filtering using NLP"/>
                  <MainComponent/>
                </div>
    {/* } */}
    </>
  );
}

export default App;
