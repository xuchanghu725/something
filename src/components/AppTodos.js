import React,{useState } from 'react';
import './AppTodos.css'




function AppTodos(props) {
    function handleCompleteMark(){
        props.CompleteMark(props.id)
    }

    function handleDeleteMark(){
        props.DeleteItemMark(props.id)
    }
    const [editFlag , SetEditFlag] = useState(false)

    function changeEditFlag (){
        // debugger;
        SetEditFlag(!editFlag)
    }
    function ChangeText (event){
        props.ChangeText(event.target.value,props.id)
        event.preventDefault();
    }


    let ViewMode = (<li class='li'>
        <input type='checkbox' checked={props.complete ? 'checked' : ''}   onClick={handleCompleteMark} class='left'/>
        <div  onClick={changeEditFlag} class='mid' select={props.complete ? 'true' : 'false'}>
            {props.text}
        </div>
        <button onClick={handleDeleteMark}  class='right'>X</button>
    </li>)


    let EditMode =(<li class='li'>
        <input type='checkbox' checked={props.complete ? 'checked' : ''}    onClick={handleCompleteMark} class='left'/>
        <input autoFocus placeholder='edit text' select={props.complete ? 'true' : 'false'} value={props.text} class='mid'   onBlur={changeEditFlag} onChange={ChangeText} onKeyDown={ e => {
          if(e.keyCode === 13){
             e.preventDefault();
             changeEditFlag()
        }}
         }/>
         <button  onClick={handleDeleteMark}  class='right'>X</button>
    </li>)  
    if(editFlag){
        return EditMode
    } else{
         return ViewMode 
    }
    }
  
  export default AppTodos;