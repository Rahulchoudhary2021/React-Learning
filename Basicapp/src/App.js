import React from 'react';
import './App.css';
import  {Header} from './components/Header';
import Footer from './components/Footer';
const App=()=>{
    const style={
      backgroundColor:'green'
    };
    return(
        
    <div>
        <Header/>
    <h1 className='red'>.........................................................External Css......................................................</h1>
        <h2 className='alert-success'>........................................................................BootstrapCss.................................................................</h2>
        <h3 style={style}>.................................................................................Inline Css...........................................................................</h3>
        <Footer/>
        </div>

        )

}
export default App;