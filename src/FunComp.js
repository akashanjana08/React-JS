import React from 'react'

 export function Form(props){
    return (
    <div>
        <form>
          <p>{props.text}</p>  
          <input type="text" onChange={props.textChange}/>     
          <input type="Button" value="Submit" onClick={props.onSubmit}/>
       </form>
    </div>
    );
}