import React from 'react';
import AppTodos from './AppTodos';
import './Applist.css'


function AppList(props) {
    function DeleteItemMark(id){
        props.DeleteItemMark(id)
    }
    function CompleteMark(id){
        props.CompleteMark(id)
    }
    function ChangeText(text,id){
        props.ChangeText(text,id)
    }
    return (
      <ul class='ul'>
        {
            props.data.map(({id,text,complete,deleteMark},index) => {
                // if (deleteMark  !== true ){
                    return (
                        <AppTodos key={index} id={id} text={text} complete={complete} CompleteMark={CompleteMark} DeleteItemMark={DeleteItemMark} ChangeText={ChangeText}/>
                    )
                // }
            })
        }
      </ul>
    );
  }
  
  export default AppList;