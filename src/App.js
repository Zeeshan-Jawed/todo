import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      todo:[{title:'buy apple',edit:false},{title:'buy watch',edit:false},{title:'repair laptop',edit:false}],
      value:'',
      editvalue:''
    }
  }
  addtodo=()=>{
    // this.state.todo.push(this.state.value);
    // this.setState({todo:this.state.todo})
    let obj={title:this.state.value}
    this.setState({todo:[...this.state.todo,obj],
      value:''
    })
    
  }
  delete=(index)=>{
      this.state.todo.splice(index,1)
      this.setState({todo:this.state.todo})
  }
  edit=(index)=>{
    // var updatedvalue=prompt("Enter value")
    // this.state.todo[index]=updatedvalue;
    this.state.todo[index].edit=true;
    this.setState({todo:this.state.todo})
}
  onhandle=(e,index)=>{
    // console.log(index,e)
    this.state.todo[index].title=e.target.value;
    this.setState({todo:this.state.todo})
  }
  update=(index)=>{
    this.state.todo[index].edit=false;
    this.setState({todo:this.state.todo})
  }
  render(){
    let {todo,value}=this.state;
    return(
      <div className="container text-center">
       
         <h3 >Todo App</h3>
        <div className="input-group mb-3">  
        <input type="text" value={value} className="form-control" onChange={(e)=>this.setState({value:e.target.value})} placeholder="Enter value"></input>
        <button type="button" className="btn btn-primary" onClick={this.addtodo}>Add</button>
        </div>
        
        <ul >
          
          {todo.map((val,i)=>
          {return <li key={i}>
          {val.edit ? <input value ={val.title} type="text" onChange={(e)=>this.onhandle(e,i)}/> :val.title}
          {val.edit?
          <button type="button" className="btn btn-warning" onClick={()=>this.update(i)}>Update</button> : 
          <button type="button" className="btn btn-secondary" onClick={()=>this.edit(i)}>Edit</button>}
          {/* <button type="button" className="btn btn-warning" onClick={()=>this.edit(i)}>Edit</button>&nbsp; */}
          <button type="button" className="btn btn-danger" onClick={()=>this.delete(i)}>Delete</button>
          </li> })}
          
        </ul>
        
      </div>
    )
  }
}

export default App;
