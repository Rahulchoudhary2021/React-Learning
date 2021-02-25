import react from 'react';
export const Operations=(props)=>{
    return(
        
        <button className="btn btn-primary" onClick={props.click}>{props.title}</button>
   
    )
}