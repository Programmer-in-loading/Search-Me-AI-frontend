import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Loading from './Components/Loading/Loading';
import { useEffect, useState } from 'react';
function App() {
   const [loading,setloading]=useState(true);
   useEffect(()=>{
    setTimeout(()=>{
      setloading(false)
    },4000)
   },[])
  return (
    <div className="App">
      {loading?<Loading/>:<>
      <Navbar/>
      <Home loading={loading}/>
      <Footer/>
      </>}
    </div>
  );
}

export default App;
