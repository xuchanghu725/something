
import React ,{useState} from 'react';
import AppForm from './AppForm'
import AppList from './AppList'
import './App.css'



function App() {

  let data =[
    {id:0, text:'Buy food:milk,bread,fruits', complete:false},
    {id:1, text:'Reserve tickets for the Imagine Dragons convert', complete:false},
    {id:2, text:'do somethings', complete:true}
  ]
  let length = data.length + 1

  const[state,setState] = useState(data)
  let mid = length
  const [id,setId] = useState(mid)
  function AddId(){
      setId(id + 1)
  }

  function AddTodoItem(newItem){
    let newdata = state.concat(newItem)
    setState(newdata)
    console.log(state)
  }

  function CompleteMark (id){
    // debugger;
    let newdata = state.map(function (item,index) {
      if(item.id === id){
        item.complete = !item.complete; 
      }
      return item
    })
    setState(newdata)
  }

  function DeleteItemMark (id){
    // debugger;
    console.log(id)
    let newdata = state.map(function (item) {
      console.log(item)
      if(item.id === id){
        item.deleteMark = true
      }
      return item
    })
    let result = []
    for(var k of newdata){
      if(!k.deleteMark){
        result.push(k)
      }
    }
    setState(result)
  }

  function ChangeText(text,id){
    let newdata = state.map(function (item,index) {
      if(item.id === id){
        item.text = text; 
      }
      return item
    })
    setState(newdata)
  }

  return (
    <div className="box1">
      <div className="box2">
        <h1>Todo List</h1>
        <div></div>
        <AppForm AddTodoItem={AddTodoItem} AddId={AddId} id={id}/>
        <AppList data={state} CompleteMark={CompleteMark} DeleteItemMark={DeleteItemMark} ChangeText={ChangeText}/>
      </div>
    </div>
  );
}

export default App;
