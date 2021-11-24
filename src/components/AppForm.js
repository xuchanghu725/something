import React,{useState,useRef} from 'react';
import './AppForm.css'



function AppForm(props) {
    const textInput = useRef(null)
    let AddTodoItem = props.AddTodoItem
    let AddId = props.AddId

    function handleSubmit(e){
        e.preventDefault()
        // debugger;
        let text = textInput.current.value
        AddId()
        let id = props.id
        AddTodoItem({id,text,complete:false})
    }
    return (
        <form onSubmit={handleSubmit} class='formInput'>
            <input text='text' placeholder='    Add a task' ref={textInput}  class='Input'/>
          </form>
    );
}
  
  export default AppForm;