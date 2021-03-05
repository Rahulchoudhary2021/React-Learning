import React from 'react';
export const Input=(props)=>{
    let placeholder=`Type ${props.title} Here`;
    return(
        <div class="form-group">
        <label>{props.title}</label>
        <input value={props.val} class="form-control" onChange={props.change} type='text' placeholder={placeholder}/>
      </div>  
    )
}