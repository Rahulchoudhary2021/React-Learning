import React from 'react';
import {Header} from '../src/components/Header';


import './App.css';
const App=()=>{
    const style={
     backgroundColor:'blue'
    };
    return(<div className='container'>   
        <Header/>  

        <h1 className='red'>Welcome Rahul......External CSS</h1>
        <h2 style={{backgroundColor:"yellowgreen"}}>React Js Start......Internal CSS</h2>
       <h3 className="alert-success">BootStrap Css Globely</h3>
    <h4 style={style}>Internal Css</h4>
    </div>)
}
export default App;

